import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonLabel,
  IonList, IonItemSliding, IonItem, IonItemOptions,
  IonItemOption, IonAvatar, IonImg
} from '@ionic/react';

const Notice: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notice</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value="unread" onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="unread">
              <IonLabel>UnRead</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="read">
              <IonLabel>Read</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Finn</h2>
                <p>Listen, I've had a pretty messed up day...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Finn</h2>
                <p>Listen, I've had a pretty messed up day...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notice;
