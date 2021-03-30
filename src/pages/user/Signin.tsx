import {
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonIcon, IonImg,
  IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonContent,
  IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonBackButton, IonText, IonThumbnail,
} from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';
import React, { useState } from "react";
import axios from 'axios';

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    axios.post('/user/signin', { email, password })
      .then(function (res) {
        console.log(res)
        // localStorage.setItem("userId", res.data.id)
        // window.location.href = "/"
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {localStorage.getItem("deviceSize") === "large" && <IonBackButton defaultHref="/" />}
          </IonButtons>
          <IonTitle>登录</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol
              size-xs="12"
              size-sm="10"
              size-md="8"
              size-lg="6"
              style={{ margin: "0 auto" }}
            >
              <IonCard>
                <IonCardHeader>
                  <IonItem lines="none">
                    <IonThumbnail slot="start" >
                      <IonImg src="/assets/icon/icon.png" />
                    </IonThumbnail>
                    <IonText><h6>卓明灾害信息服务中心</h6></IonText>
                  </IonItem>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel position="floating">邮箱</IonLabel>
                    <IonInput
                      type="email"
                      name="email"
                      onIonChange={(e) => {
                        setEmail(e.detail.value!);
                      }}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">密码</IonLabel>
                    <IonInput
                      type="password"
                      name="password"
                      onIonChange={(e) => {
                        setPassword(e.detail.value!);
                      }}
                    ></IonInput>
                  </IonItem>
                  <br />
                  <IonButton expand={localStorage.getItem("deviceSize") === "small" ? "block" : undefined} onClick={onSubmit}>登录</IonButton>
                  <IonItem lines="none">
                    <IonButtons slot="start">
                      <IonButton fill="clear" routerLink={'/signup'}>
                        注册 <IonIcon slot="end" icon={arrowForwardOutline} />
                      </IonButton>
                    </IonButtons>
                    <IonButtons slot="end">
                      <IonButton>关于卓明</IonButton>
                    </IonButtons>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
};

export default Signin;
