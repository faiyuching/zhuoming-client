import React, { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonLabel, IonNote,
  IonList, IonItemSliding, IonItem, IonItemOptions,
  IonItemOption, IonAvatar, IonImg, IonButtons, IonButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import moment from "moment"

const Notice: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState(false)
  const [value, setValue] = useState("unread")
  const [unreadNotices, setUnreadNotices] = useState([{
    User: {
      nickname: "",
      headimgurl: "",
      type: "",
      description: "",
    },
    Task: {
      task_id: "",
      task_name: ""
    },
    type: "",
    action: "",
    status: "",
    created_at: "",
    notice_id: ""
  }]);
  const [readNotices, setReadNotices] = useState([{
    User: {
      nickname: "",
      headimgurl: "",
      type: "",
      description: "",
    },
    Task: {
      task_id: "",
      task_name: ""
    },
    type: "",
    action: "",
    status: "",
    created_at: "",
    notice_id: ""
  }]);

  useEffect(() => {
    axios.get(`/notices?user_id=${localStorage.getItem("user_id")}`)
      .then(function (res) {

        let unread_notice: any = [];
        let read_notice: any = [];
        res.data.forEach((each: any) => {
          if (each.status === "unread") {
            unread_notice.push(each)
          } else if (each.status === "read") {
            read_notice.push(each)
          }
        })
        setUnreadNotices(unread_notice)
        setReadNotices(read_notice)

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [status])

  const onChangeStatus = (notice_id: string) => {
    axios.put(`/notice/${notice_id}`, { status: "read" })
      .then(function (res) {
        setStatus(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("notice.notice")}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink={"/notice/new"}>{t("notice.post")}</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value={value} onIonChange={e => setValue(e.detail.value!)}>
            <IonSegmentButton value="unread">
              <IonLabel>{t("notice.unread")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="read">
              <IonLabel>{t("notice.archive")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {value === "unread" && unreadNotices.map((notice, index) => {
            return (
              <IonItemSliding key={index}>
                <IonItem button routerLink={`/response/task/${notice.Task.task_id}`} onClick={() => { onChangeStatus(notice.notice_id) }}>
                  <IonAvatar slot="start">
                    <IonImg src="/assets/task.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{t(`notice.${notice.type}`)}</h2>
                    <p>{notice.User.nickname + " " + t(`response.${notice.action + notice.type}`) + "：" + notice.Task.task_name}</p>
                  </IonLabel>
                  <IonNote slot="end">{moment(notice.created_at).startOf('hour').fromNow()}</IonNote>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )
          })}
          {value === "read" && readNotices.map((notice, index) => {
            return (
              <IonItemSliding key={index}>
                <IonItem button routerLink={`/response/task/${notice.Task.task_id}`} onClick={() => { onChangeStatus(notice.notice_id) }}>
                  <IonAvatar slot="start">
                    <IonImg src="/assets/task.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{t(`notice.${notice.type}`)}</h2>
                    <p>{notice.User.nickname + " " + t(`response.${notice.action + notice.type}`) + "：" + notice.Task.task_name}</p>
                  </IonLabel>
                  <IonNote slot="end">{moment(notice.created_at).startOf('hour').fromNow()}</IonNote>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )
          })}
          {/* <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/notice.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.system")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
              <IonBadge color="danger">1</IonBadge>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/task.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.task")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/group.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.group")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Faiyuching</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding> */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notice;
