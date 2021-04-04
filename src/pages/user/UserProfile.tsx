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
              <IonLabel className="ion-text-wrap">
                <p>{t("user.nickname")}</p>
                <h2>{userInfo.nickname}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.gender")}</p>
                {userInfo.sex == "0" && <h2>未知</h2>}
                {userInfo.sex == "1" && <h2>男性</h2>}
                {userInfo.sex == "2" && <h2>女性</h2>}
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.location")}</p>
                <h2>{userInfo.country + " - " + userInfo.province + " - " + userInfo.city}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.language")}</p>
                <h2>{userInfo.language}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          {userInfo.password && (
            <IonItemSliding>
              <IonItem lines="full">
                <IonLabel className="ion-text-wrap">
                  <p>{t("user.password")}</p>
                  <h2>. . . . . . . .</h2>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption>编辑</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          )}
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.wechat")}</p>
                <h2>{userInfo.wechat}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.shimo")}</p>
                <h2>{userInfo.shimo}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.phone")}</p>
                <h2>{userInfo.phone}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.email")}</p>
                <h2>{userInfo.email}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.role")}</p>
                <h2>{userInfo.remark}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.job")}</p>
                <h2>{userInfo.job}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.skill")}</p>
                <h2>{userInfo.skill}</h2>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.introduction")}</p>
                <h2>{userInfo.introduction}</h2>
              </IonLabel>
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
