import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton, IonButtons,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

export interface responseType {
  response_id: string,
  response_name: string,
  response_slogan: string,
  created_at: string,
  end_time: string,
  members: number
}
const ResponseHistory: React.FC = () => {
  const { t } = useTranslation();
  const [responses, setResponses] = useState([{
    response_id: "",
    response_name: "",
    response_slogan: "",
    created_at: "",
    end_time: "",
    members: 0
  }]);

  const enterResponse = (response_id: string, response_name: string, response_slogan: string) => {
    localStorage.setItem("response_id", response_id)
    localStorage.setItem("response_name", response_name)
    response_slogan && localStorage.setItem("response_slogan", response_slogan)
    window.location.href = "/response"
  }

  useEffect(() => {
    axios.get('/responses')
      .then(function (responses) {
        let responseList: any = []
        responses.data.forEach((each: responseType) => {
          axios.get(`/applies?response_id=${each.response_id}`)
            .then(function (response) {
              each.members = response.data.length
              responseList.push(each)
              setResponses(responseList)
            })
            .catch(function (error) {
              console.log(error);
            });
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const launchResponse = () => {
    if (!localStorage.getItem("user_id")) {
      alert("请先登录！")
    } else {
      window.location.href = "/response/launch"
    }
  }

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
            <IonButton onClick={() => { launchResponse() }}>{t("response.launch_response")}</IonButton>
          </IonButtons>
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
                <IonCardSubtitle>{response.created_at.split("T")[0] + " ｜ " + (response.end_time ? response.end_time.split("T")[0] : "正在响应") + " ｜ " + response.members + "人参与"}</IonCardSubtitle>
                <IonCardTitle>{response.response_name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{}</IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default ResponseHistory;
