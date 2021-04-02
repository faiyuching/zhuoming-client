import React, { useEffect, useState } from 'react';
import { IonAlert } from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const QRcode: React.FC = () => {
  const { t } = useTranslation();
  const [alertOpen, setAlertpen] = useState(false);
  const [QRcode, setQRcode] = useState("")

  useEffect(() => {
    axios.get("/get/qrcode")
      .then(function (res) {
        if (res.data.ticket) {
          setQRcode("<img src='" + "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + res.data.ticket + "'/>")
          setAlertpen(true)
          // axios.get('/wechat/login')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonAlert
      isOpen={alertOpen}
      onDidDismiss={() => setAlertpen(false)}
      header={"微信扫描二维码即可登录"}
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
  )
};

export default QRcode;
