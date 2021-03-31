import {
  IonButton, IonContent, IonIcon, IonImg,
  IonHeader, IonToolbar, IonTitle, IonPage, 
} from "@ionic/react";
import React, { useState } from "react";
import axios from 'axios';

const wxLogin: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>登录</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton href={"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa407d8ca09c9b93b&redirect_uri=https%3a%2f%2fwww.zhuominginfo.cn%2f&response_type=code&scope=snsapi_userinfo#wechat_redirec"}>
          微信登录
        </IonButton>
      </IonContent>
    </IonPage>
  )
};

export default wxLogin;
