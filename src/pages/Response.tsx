import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonIcon,
  IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonButton, IonButtons, IonSegment, IonSegmentButton,
  IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ResponseMenu from '../components/response/ResponseMenu';

const Response: React.FC = () => {
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Response</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">Tasks</IonTitle>
            <IonButtons slot="end">
              <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                <IonSegmentButton value="unfinished">
                  <IonLabel>UnFinished</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="finished">
                  <IonLabel>finished</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
              <IonCardTitle>Task Name</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Task Content
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
              <IonCardTitle>Task Name</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Task Content
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
              <IonCardTitle>Task Name</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Task Content
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Response;
