import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton,
  IonSegment, IonSegmentButton, IonLabel,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonItem,
  IonImg, IonThumbnail, IonNote
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';



const User: React.FC = () => {
  const { t } = useTranslation();
  const [userInfo, serUserInfo] = useState({
    nickname: "",
    shimo: "",
    headimgurl: "",
    remark: "",
    job: ""
  })

  useEffect(() => {

    if (localStorage.getItem("user_id")) {
      axios.get(`/user/${localStorage.getItem("user_id")}`)
        .then(function (res) {
          console.log(res.data)
          serUserInfo(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      window.location.href = "/user/login"
    }

  }, [localStorage.getItem("user_id")])


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink={'/user/follow'}>{t("user.follow")}</IonButton>
          </IonButtons>
          <IonTitle>{t("user.user")}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink={'/user/settings'}>{t("user.settings")}</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonItem lines="none" button routerLink={"/user/profile"}>
            <IonThumbnail slot="start">
              <IonImg style={{ borderRadius: "50%" }} src={userInfo.headimgurl} />
            </IonThumbnail>
            <IonLabel>
              <h1><strong>{userInfo.nickname}</strong></h1>
              <p>{(userInfo.remark || "") + " " + (userInfo.job || "")}</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonNote>石墨账号：{userInfo.shimo || "未填写"}</IonNote>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="none">
          <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="unfinished">
              <IonLabel>{t("user.unfinished")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="finished">
              <IonLabel>{t("user.finished")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonItem>
        <IonCard routerLink={'/response/task/1'}>
          <IonCardHeader>
            <IonCardSubtitle>组名｜岗位名</IonCardSubtitle>
            <IonCardTitle>任务标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            任务内容
            </IonCardContent>
        </IonCard>
        <IonCard routerLink={'/response/task/2'}>
          <IonCardHeader>
            <IonCardSubtitle>组名｜岗位名</IonCardSubtitle>
            <IonCardTitle>任务标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            任务内容
            </IonCardContent>
        </IonCard>
        <IonCard routerLink={'/response/task/3'}>
          <IonCardHeader>
            <IonCardSubtitle>组名｜岗位名</IonCardSubtitle>
            <IonCardTitle>任务标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            任务内容
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
