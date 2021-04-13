import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButtons, IonButton, IonThumbnail, IonItemGroup,
  IonAlert, IonLabel, IonImg, IonItem, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from "axios";
import queryString from 'querystring'
import { useLocation } from 'react-router';

const UserProfile: React.FC = () => {
  const { t } = useTranslation();
  const user_id = queryString.parse(useLocation().search.split('?')[1]).id
  const [showAlert, setShowAlert] = useState(false)
  const [key, setKey] = useState("")
  const [value, setValue] = useState("")
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
    role: ""
  })

  useEffect(() => {
    if (user_id) {
      axios.get(`/user/${user_id}`)
        .then(function (res) {
          console.log(res.data)
          serUserInfo(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    } else if (localStorage.getItem("user_id")) {
      axios.get(`/user/${localStorage.getItem("user_id")}`)
        .then(function (res) {
          serUserInfo(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      window.location.href = "/user/login"
    }
  }, [])

  const exitAccount = () => {
    localStorage.removeItem("user_id")
    window.location.href = "/user"
  }
  const updateUser = (key: string, value: string) => {
    axios.put(`/user/${localStorage.getItem("user_id")}`, { key, value })
      .then(function (res) {
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      })
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
          {!user_id && <IonTitle>{t("user.me")}</IonTitle>}
          {!user_id &&
            <IonButtons slot="end">
              <IonButton color="danger" onClick={() => { exitAccount() }}>退出账号</IonButton>
            </IonButtons>
          }
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{t("user.profile")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={"修改" + t(`user.${key}`)}
          inputs={[
            {
              name: 'value',
              type: 'text',
              value: value,
              placeholder: "请输入"
            }
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Ok',
              handler: (data) => {
                updateUser(key, data.value)
              }
            }
          ]}
        />
        {user_id ?
          <IonItemGroup>
            <IonItem lines="none">
              <IonThumbnail slot="start">
                <IonImg style={{ borderRadius: "50%" }} src={userInfo.headimgurl} />
              </IonThumbnail>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.role")}</p>
                <h2>{t(`user.${userInfo.role}`)}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.nickname")}</p>
                <h2>{userInfo.nickname}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.gender")}</p>
                {userInfo.sex === "0" && <h2>未知</h2>}
                {userInfo.sex === "1" && <h2>男性</h2>}
                {userInfo.sex === "2" && <h2>女性</h2>}
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.location")}</p>
                <h2>{userInfo.country + "-" + userInfo.province + "-" + userInfo.city}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.language")}</p>
                <h2>{t(`user.${userInfo.language}`)}</h2>
              </IonLabel>
            </IonItem>
            {userInfo.password && (
              <IonItem lines="full">
                <IonLabel className="ion-text-wrap">
                  <p>{t("user.password")}</p>
                  <h2>. . . . . . . .</h2>
                </IonLabel>
              </IonItem>
            )}
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.wechat")}</p>
                <h2>{userInfo.wechat}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.shimo")}</p>
                <h2>{userInfo.shimo}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.phone")}</p>
                <h2>{userInfo.phone}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.email")}</p>
                <h2>{userInfo.email}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.job")}</p>
                <h2>{userInfo.job}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.skill")}</p>
                <h2>{userInfo.skill}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.introduction")}</p>
                <h2>{userInfo.introduction}</h2>
              </IonLabel>
            </IonItem>
          </IonItemGroup> :
          <IonItemGroup>
            <IonItem lines="none" button>
              <IonThumbnail slot="start">
                <IonImg style={{ borderRadius: "50%" }} src={userInfo.headimgurl} />
              </IonThumbnail>
            </IonItem>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <p>{t("user.role")}</p>
                <h2>{t(`user.${userInfo.role}`)}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button onClick={() => { setKey("nickname"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.nickname")}</p>
                <h2>{userInfo.nickname}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.gender")}</p>
                {userInfo.sex === "0" && <h2>未知</h2>}
                {userInfo.sex === "1" && <h2>男性</h2>}
                {userInfo.sex === "2" && <h2>女性</h2>}
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.location")}</p>
                <h2>{userInfo.country + "-" + userInfo.province + "-" + userInfo.city}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.language")}</p>
                <h2>{t(`user.${userInfo.language}`)}</h2>
              </IonLabel>
            </IonItem>
            {userInfo.password && (
              <IonItem lines="full" button onClick={() => { setKey("password"); setShowAlert(true) }}>
                <IonLabel className="ion-text-wrap">
                  <p>{t("user.password")}</p>
                  <h2>. . . . . . . .</h2>
                </IonLabel>
              </IonItem>
            )}
            <IonItem lines="full" button onClick={() => { setKey("wechat"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.wechat")}</p>
                <h2>{userInfo.wechat}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button onClick={() => { setKey("shimo"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.shimo")}</p>
                <h2>{userInfo.shimo}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button onClick={() => { setKey("phone"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.phone")}</p>
                <h2>{userInfo.phone}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button onClick={() => { setKey("email"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.email")}</p>
                <h2>{userInfo.email}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button onClick={() => { setKey("job"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.job")}</p>
                <h2>{userInfo.job}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button onClick={() => { setKey("skill"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.skill")}</p>
                <h2>{userInfo.skill}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines="full" button onClick={() => { setKey("introduction"); setShowAlert(true) }}>
              <IonLabel className="ion-text-wrap">
                <p>{t("user.introduction")}</p>
                <h2>{userInfo.introduction}</h2>
              </IonLabel>
            </IonItem>
          </IonItemGroup>
        }
      </IonContent>
    </IonPage >
  );
};

export default UserProfile;
