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
    id: "",
    response_name: "",
    begin_time: "",
    end_time: ""
  }]);

  useEffect(() => {
    axios.get('/responses')
      .then(function (res) {
        const responseList = res.data
        responseList.pop()
        setResponses(responseList)
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
          <IonButtons slot="end">
            <IonButton>{t("response.launch_response")}</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {responses.length === 0 ? (
          <IonCard>
            <IonCardHeader>暂无响应</IonCardHeader>
          </IonCard>
        ) : responses.map((response, index) => {
          return (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardSubtitle>{response.begin_time.split(".")[0].replace("T", " ")}{response.end_time}｜参与人数</IonCardSubtitle>
                <IonCardTitle>{response.response_name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>结果：完成几个任务｜产出几个产品｜完成几次讨论</IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default ResponseHistory;
