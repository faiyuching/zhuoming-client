import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton, IonThumbnail,
  IonItemGroup, IonItemSliding, IonLabel, IonImg,
  IonItemOptions, IonItemOption, IonItem, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from "axios";
const UserProfile: React.FC = () => {
  const { t } = useTranslation();

  const [userInfo, serUserInfo] = useState({
    shimo: "",
    wechat: "",
    phone: "",
    email: "",
    password: "",
    job: "",
    skill: "",
    introduction: "",
    nickname: "",
    sex: "",
    language: "",
    city: "",
    province: "",
    country: "",
    headimgurl: "",
    remark: ""
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

  const exitAccount = () => {
    localStorage.removeItem("user_id")
    window.location.href = "/user"
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton text={t("back")} defaultHref="/user" />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("user.user")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{t("user.profile")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItemGroup>
          <IonItem lines="none" button>
            <IonThumbnail slot="start">
              <IonImg style={{ borderRadius: "50%" }} src={userInfo.headimgurl} />
            </IonThumbnail>
          </IonItem>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.nickname")}</IonLabel>
              <IonLabel>{userInfo.nickname}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          {userInfo.password && (
            <IonItemSliding>
              <IonItem lines="full">
                <IonLabel className="ion-text-wrap">{t("user.password")}</IonLabel>
                <IonLabel>{userInfo.password}</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption>编辑</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          )}
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.wechat")}</IonLabel>
              <IonLabel>{userInfo.wechat}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.shimo")}</IonLabel>
              <IonLabel>{userInfo.shimo}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.phone")}</IonLabel>
              <IonLabel>{userInfo.phone}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.email")}</IonLabel>
              <IonLabel>{userInfo.email}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.role")}</IonLabel>
              <IonLabel>{userInfo.remark}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.gender")}</IonLabel>
              <IonLabel>
                {userInfo.sex == "0" && "未知"}
                {userInfo.sex == "1" && "男性"}
                {userInfo.sex == "2" && "女性"}
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.location")}</IonLabel>
              <IonLabel>{userInfo.country + " - " + userInfo.province + " - " + userInfo.city}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.language")}</IonLabel>
              <IonLabel>{userInfo.language}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.job")}</IonLabel>
              <IonLabel>{userInfo.job}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.skill")}</IonLabel>
              <IonLabel>{userInfo.skill}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">{t("user.introduction")}</IonLabel>
              <IonLabel>{userInfo.skill}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonButton color="danger" fill="outline" expand="block" onClick={() => { exitAccount() }}>退出账号</IonButton>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
