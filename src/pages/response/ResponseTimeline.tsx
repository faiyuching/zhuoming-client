import React from 'react';
import {
  IonContent, IonHeader, IonMenuButton,
  IonPage, IonTitle, IonToolbar, IonSplitPane, IonIcon,
  IonButtons, IonItem, IonLabel, IonItemGroup,
  IonSegment, IonSegmentButton, IonItemOption,
  IonItemOptions, IonItemSliding, IonButton
} from '@ionic/react';
import { addOutline, trashOutline, pencilOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";

const ResponseTimeline: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{t("response.response")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.timeline")}</IonTitle>
            <IonButtons slot="end">
              <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                <IonSegmentButton value="unfinished">
                  <IonLabel>{t("response.response")}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="finished">
                  <IonLabel>{t("response.disaster")}</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItemGroup>
            <IonItemSliding>
              <IonItem button lines="full">
                <IonLabel>
                  <h2>事件名称｜事件时间</h2>
                  <p>Multiline text that should wrap when it is too long
                  to fit on one line in the item...</p>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="danger">
                  <IonIcon slot="icon-only" icon={trashOutline} />
                </IonItemOption>
                <IonItemOption>
                  <IonIcon slot="icon-only" icon={pencilOutline} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
            <IonItemSliding>
              <IonItem button lines="full">
                <IonLabel>
                  <h2>事件名称｜事件时间</h2>
                  <p>Multiline text that should wrap when it is too long
                  to fit on one line in the item...</p>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="danger">
                  <IonIcon slot="icon-only" icon={trashOutline} />
                </IonItemOption>
                <IonItemOption>
                  <IonIcon slot="icon-only" icon={pencilOutline} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonItemGroup>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseTimeline;
