import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonButtons, IonGrid, IonListHeader, IonIcon
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { closeOutline } from 'ionicons/icons';
const LaunchSuccess: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("response.launch_response")}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/response/tasks">
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonListHeader>
            <h2>创建成功</h2>
          </IonListHeader>
          <IonButton expand="block" routerLink="/response/settings">去创建分组、岗位</IonButton>
          <IonButton expand="block" fill="clear" >邀请好友加入</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LaunchSuccess;