import {
  IonButton, IonContent, IonAlert,
  IonHeader, IonToolbar, IonTitle, IonPage, IonButtons,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';

const Wxogin: React.FC = () => {
  const { t } = useTranslation();
  const [login, setLogin] = useState(false);
  const [QRcode, setQRcode] = useState("")

  useEffect(() => {
    axios.get("/wx/get_qrcode")
      .then(function (res) {
        if (res.data.ticket) {
          setQRcode("<img src='" + "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + res.data.ticket + "'/>")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>登录</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa407d8ca09c9b93b&redirect_uri=https%3a%2f%2fwww.zhuominginfo.cn&response_type=code&scope=snsapi_base&#wechat_redirec">test</IonButton>
        <IonButton color="success" onClick={() => setLogin(true)} expand="block">微信登录</IonButton>
        <IonAlert
          isOpen={login}
          onDidDismiss={() => setLogin(false)}
          header={"用微信扫描二维码即可登录"}
          message={QRcode}
          buttons={[
            {
              text: t("response.cancel"),
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            }
          ]}
        />
      </IonContent>
    </IonPage>
  )
};

export default Wxogin;
