import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonChip, IonLabel, IonGrid, IonRow, IonCol, IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonButtons, IonButton, IonIcon
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { useTranslation } from "react-i18next";

const Forum: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("forum.forum")}</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonChip color="danger" outline>
                <IonLabel>{t("forum.question")}</IonLabel>
              </IonChip>
              <IonChip color="warning" outline>
                <IonLabel>{t("forum.disaster")}</IonLabel>
              </IonChip>
              <IonChip color="success" outline>
                <IonLabel>{t("forum.zhuoming")}</IonLabel>
              </IonChip>
              <IonChip color="tertiary" outline>
                <IonLabel>{t("forum.charity")}</IonLabel>
              </IonChip>
              <IonChip color="primary" outline>
                <IonLabel>{t("forum.development")}</IonLabel>
              </IonChip>
              <IonChip color="secondary" outline>
                <IonLabel>{t("forum.response")}</IonLabel>
              </IonChip>
              <IonChip color="dark" outline>
                <IonLabel>{t("forum.opinion")}</IonLabel>
              </IonChip>
              <IonChip color="medium" outline>
                <IonLabel>{t("forum.moments")}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>内容</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>内容</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>内容</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>内容</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Forum;
