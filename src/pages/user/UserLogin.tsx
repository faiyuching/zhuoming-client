import {
  IonButton, IonContent,IonHeader, IonToolbar, IonTitle, 
  IonPage, IonIcon,
} from "@ionic/react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import QRcode from '../../components/user/QRcode'
import axios from 'axios';
import './UserLogin.css'
import { logoWechat } from "ionicons/icons";

let env = ''
if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
  env = "wechat"
} else {
  env = "browser"
}

const UserLogin: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code")
    if (code) {
      axios.post('/user/login/wechat/browser', { code: code })
        .then(function (res) {
          localStorage.setItem("user_id", res.data.user_id)
          window.location.href = "/user"
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("user.sign")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          {env === "browser" && <QRcode />}
          {env === "wechat" &&
            <IonButton color="success" expand="block" href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa407d8ca09c9b93b&redirect_uri=https%3A%2F%2Fwww.zhuominginfo.cn%2Fuser%2Flogin&response_type=code&scope=snsapi_userinfo&#wechat_redirec">
              <IonIcon slot="start" icon={logoWechat} />
              {t("user.wechat_sign")}
            </IonButton>
          }
        </div>
      </IonContent>
    </IonPage>
  )
};

export default UserLogin;
