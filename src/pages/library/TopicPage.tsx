import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonImg, IonGrid, IonRow, IonCol, IonBackButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const TopicPage: React.FC = () => {
  const { t } = useTranslation();

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
          <IonTitle size="large">专题名称</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src="/assets/COVID-19-Card-3.jpg" />
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
