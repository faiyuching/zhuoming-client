import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton, IonButtons,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const ResponseHistory: React.FC = () => {
  const { t } = useTranslation();
  const [responses, setResponses] = useState([{
    response_id: "",
    response_name: "",
    response_slogan: "",
    created_at: "",
    end_time: ""
  }]);

  const enterResponse = (response_id: string, response_name: string, response_slogan: string) => {
    localStorage.setItem("response_id", response_id)
    localStorage.setItem("response_name", response_name)
    response_slogan && localStorage.setItem("response_slogan", response_slogan)
    window.location.href = "/response/home"
  }

  useEffect(() => {
    axios.get('/responses')
      .then(function (res) {
        setResponses(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton text={t("back")} />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("response.history")}</IonTitle>
          {localStorage.getItem("response_current") !== "true" &&
            <IonButtons slot="end">
              <IonButton routerLink="/response/launch">{t("response.launch_response")}</IonButton>
            </IonButtons>
          }
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {responses.length === 0 ? (
          <IonCard>
            <IonCardHeader>暂无历史响应</IonCardHeader>
          </IonCard>
        ) : responses.map((response, index) => {
          return (
            <IonCard key={index} onClick={() => { enterResponse(response.response_id, response.response_name, response.response_slogan) }}>
              <IonCardHeader>
                <IonCardSubtitle>{response.created_at.split("T")[0] + " - " + (response.end_time ? response.end_time.split("T")[0] : "正在响应")}｜参与人数</IonCardSubtitle>
                <IonCardTitle>{response.response_name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>完成几个任务｜产出几个产品</IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default ResponseHistory;
