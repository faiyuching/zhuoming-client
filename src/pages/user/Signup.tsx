import {
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
  IonCardContent, IonText, IonThumbnail,
  IonItem, IonLabel, IonInput, IonButton, IonContent, IonIcon, IonImg,
  IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonBackButton,
} from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';
import React, { useState } from "react";
import axios from 'axios';

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [skill, setSkill] = useState("");
  const [intro, setIntro] = useState("");
  const onSubmit = () => {
    if (password === passwordCheck) {
      axios.post('/user/signup', { username, email, password, skill, intro })
        .then(function (res) {
          console.log(res)
          // localStorage.setItem("userId", res.data.id)
          // window.location.href = "/"
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      alert("两次输入的密码不相符");
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {localStorage.getItem("deviceSize") === "large" && <IonBackButton defaultHref="/" />}
          </IonButtons>
          <IonTitle>注册</IonTitle>
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
                    <IonLabel position="floating">用户名</IonLabel>
                    <IonInput
                      type="text"
                      name="username"
                      onIonChange={(e) => {
                        setUsername(e.detail.value!);
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
                  <IonItem>
                    <IonLabel position="floating">确认密码</IonLabel>
                    <IonInput
                      type="password"
                      name="passwordCheck"
                      onIonChange={(e) => {
                        setPasswordCheck(e.detail.value!);
                      }}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">专业/技能</IonLabel>
                    <IonInput
                      type="text"
                      name="skill"
                      onIonChange={(e) => {
                        setSkill(e.detail.value!);
                      }}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">一句话介绍</IonLabel>
                    <IonInput
                      type="text"
                      name="intro"
                      onIonChange={(e) => {
                        setIntro(e.detail.value!);
                      }}
                    ></IonInput>
                  </IonItem>
                  <br />
                  <IonButton expand={localStorage.getItem("deviceSize") === "small" ? "block" : undefined} onClick={onSubmit}>注册</IonButton>
                  <IonItem lines="none">
                    <IonButtons slot="start">
                      <IonButton fill="clear" routerLink={'/signin'}>
                        登录 <IonIcon slot="end" icon={arrowForwardOutline} />
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

export default Signup;
