import React from 'react';
import {
  IonContent, IonHeader, IonIcon, IonPage,
  IonTitle, IonToolbar, IonButton, IonButtons,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent,
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { useTranslation } from "react-i18next";

const ResponseHistory: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("response.history")}</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>响应时间｜参与人数</IonCardSubtitle>
            <IonCardTitle>响应标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>结果：完成几个任务｜产出几个产品｜完成几次讨论</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ResponseHistory;
