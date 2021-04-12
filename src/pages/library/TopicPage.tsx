import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonImg, IonGrid, IonRow, IonCol, IonBackButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router';
import axios from 'axios';

interface ParamTypes {
  topic_id: string
}

const TopicPage: React.FC = () => {
  const { t } = useTranslation();
  const { topic_id } = useParams<ParamTypes>()
  const [topic, setTopic] = useState({
    topic_id: "",
    topic_name: "",
    picture_url: "",
    description: "",
    Category: {
      category_name: ""
    },
  });

  useEffect(() => {
    axios.get(`/topic/${topic_id}`)
      .then(function (res) {
        setTopic(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={"/library"} text={t("back")} />
          </IonButtons>
          <IonTitle>{t("library.library")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{topic.topic_name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src={topic.picture_url} />
        <IonGrid>
          <IonRow>
            <IonCol size-lg="4" size-md="6" size-sm="12">
              {/* <IonCard>
                <IonImg src="/assets/COVID-19-Card-3.jpg" />
                <IonCardHeader>
                  <IonCardSubtitle>COVID-19｜专题</IonCardSubtitle>
                  <IonCardTitle>专题名称</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  专题简介
                  </IonCardContent>
              </IonCard> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>

  );
};

export default TopicPage;
