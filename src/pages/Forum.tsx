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
                <IonLabel>Q&A</IonLabel>
              </IonChip>
              <IonChip color="warning" outline>
                <IonLabel>disaster</IonLabel>
              </IonChip>
              <IonChip color="success" outline>
                <IonLabel>zhuoming</IonLabel>
              </IonChip>
              <IonChip color="tertiary" outline>
                <IonLabel>Charity</IonLabel>
              </IonChip>
              <IonChip color="primary" outline>
                <IonLabel>Development</IonLabel>
              </IonChip>
              <IonChip color="secondary" outline>
                <IonLabel>response</IonLabel>
              </IonChip>
              <IonChip color="dark" outline>
                <IonLabel>Whine</IonLabel>
              </IonChip>
              <IonChip color="medium" outline>
                <IonLabel>moments</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>topic</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Content</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>topic</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Content</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>topic</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Content</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>topic</IonCardSubtitle>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Content</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Forum;
