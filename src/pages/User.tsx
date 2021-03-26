import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonIcon, IonButtons, IonButton,
  IonSegment, IonSegmentButton, IonLabel,
  IonSplitPane, IonMenuButton, IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCardContent
} from '@ionic/react';
import UserMenu from '../components/user/UserMenu';

const User: React.FC = () => {
  return (
    <IonSplitPane contentId="user">
      <UserMenu />
      <IonPage id="user">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonMenuButton />
              </IonButton>
            </IonButtons>
            <IonTitle>User</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">My Tasks</IonTitle>
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

export default User;
