import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonChip, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonImg,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonButtons, IonButton, IonSearchbar, IonItem, IonIcon, IonAvatar
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { chatbubblesOutline, heartOutline } from 'ionicons/icons';

const Forum: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("forum.forum")}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink={"/forum/post/new"}>{t("forum.post")}</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder={t("library.search")} value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonChip color="dark" outline>
                <IonLabel>{t("forum.question")}100</IonLabel>
              </IonChip>
              <IonChip color="danger" outline>
                <IonLabel>{t("forum.disaster")}23</IonLabel>
              </IonChip>
              <IonChip color="warning" outline>
                <IonLabel>{t("forum.zhuoming")}45</IonLabel>
              </IonChip>
              <IonChip color="success" outline>
                <IonLabel>{t("forum.charity")}12</IonLabel>
              </IonChip>
              <IonChip color="tertiary" outline>
                <IonLabel>{t("forum.development")}2</IonLabel>
              </IonChip>
              <IonChip color="primary" outline>
                <IonLabel>{t("forum.response")}9</IonLabel>
              </IonChip>
              <IonChip color="secondary" outline>
                <IonLabel>{t("forum.opinion")}10</IonLabel>
              </IonChip>
              <IonChip color="medium" outline>
                <IonLabel>{t("forum.moments")}22</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard routerLink={"/forum/post/:id"}>
          <IonCardHeader>
            <IonCardSubtitle>#提问</IonCardSubtitle>
          </IonCardHeader>
          <IonItem lines="none">
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar.png" />
            </IonAvatar>
            <IonLabel>
              <h2>faiyuching</h2>
              <p>开发者</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>请问有哪些汶川地震相关的纪录片？</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonButtons slot="end">
              <IonButton color="medium">
                <IonIcon icon={heartOutline} />123
                </IonButton>
              <IonButton color="medium">
                <IonIcon icon={chatbubblesOutline} />123
                </IonButton>
            </IonButtons>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Forum;
