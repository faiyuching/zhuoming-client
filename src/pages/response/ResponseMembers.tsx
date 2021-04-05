import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonItemOptions, IonItemDivider,
  IonPage, IonTitle, IonToolbar, IonSplitPane, IonItemOption, IonCard, IonCardHeader,
  IonButton, IonButtons, IonItem, IonLabel, IonItemSliding, IonAvatar, IonImg
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import ResponseMembersPicker from "../../components/response/ResponseMembersPicker"
import axios from 'axios';

export interface ISessionTime {
  weekday: string;
  period: string;
}

const ResponseMembers: React.FC = () => {
  const { t } = useTranslation();

  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [sessionTime, setSessionTime] = useState<ISessionTime | undefined>(
    undefined
  );

  const [applies, setApplies] = useState([{
    user_id: "",
    task_num: "",
    User: {
      nickname: "",
      headimgurl: ""
    }
  }])

  useEffect(() => {
    axios.get(`/applies?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        let hash = [];
        for (var i = 0; i < res.data.length; i++) {
          for (var j = i + 1; j < res.data.length; j++) {
            if (res.data[i].user_id === res.data[j].user_id) {
              ++i;
              j = i;
            }
          }
          res.data[i].task_num = 0;
          hash.push(res.data[i]);
        }
        hash.forEach(item => {
          res.data.forEach((each: any) => {
            if (item.user_id === each.user_id) {
              item.task_num++
            }
          })
        });
        setApplies(hash)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{localStorage.getItem("response_name")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("response.invite")}</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.members")}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonItem onClick={() => { setPickerIsOpen(true); }} lines="none">
              {sessionTime ? (
                <IonLabel>{sessionTime?.weekday} - {sessionTime?.period}</IonLabel>
              ) : (
                <IonLabel className="placeHolder">{t("response.all_groups")} - {t("response.all_jobs")}</IonLabel>
              )}
            </IonItem>
            <IonButtons slot="end">
              <IonButton onClick={() => { setPickerIsOpen(true); }}>{t("response.filter")}</IonButton>
              <IonButton onClick={() => { setSessionTime(undefined); }}>{t("response.clear")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {/* <ResponseMembersPicker
            isOpen={pickerIsOpen}
            onCancel={() => {
              setPickerIsOpen(false);
            }}
            onSave={(_value: any) => {
              console.log(_value);
              let { Day, SessionTime } = _value;
              setSessionTime({ weekday: Day.text, period: SessionTime.text });
              setPickerIsOpen(false);
            }}
          /> */}
          <IonItemDivider>{applies.length}</IonItemDivider>
          {applies.length === 0 ? (
            <IonCard>
              <IonCardHeader>暂无报名</IonCardHeader>
            </IonCard>
          ) : applies.map((apply, index) => {
            return (
              <IonItemSliding key={index}>
                <IonItem button routerLink={'/user'}>
                  <IonAvatar slot="start">
                    <IonImg src={apply.User.headimgurl} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{apply.User.nickname}</h2>
                    <p>正在进行中的任务：{apply.task_num}</p>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption color="danger">{t("remove")}</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )
          })}
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseMembers;
