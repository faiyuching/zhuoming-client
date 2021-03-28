import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonChip, IonLabel, IonGrid, IonRow, IonCol, IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonButtons, IonButton, IonSearchbar, IonItem, IonIcon
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
            <IonButton routerLink={"/forum/post/new"}>发布</IonButton>
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
                <IonLabel>{t("forum.question")}</IonLabel>
              </IonChip>
              <IonChip color="danger" outline>
                <IonLabel>{t("forum.disaster")}</IonLabel>
              </IonChip>
              <IonChip color="warning" outline>
                <IonLabel>{t("forum.zhuoming")}</IonLabel>
              </IonChip>
              <IonChip color="success" outline>
                <IonLabel>{t("forum.charity")}</IonLabel>
              </IonChip>
              <IonChip color="tertiary" outline>
                <IonLabel>{t("forum.development")}</IonLabel>
              </IonChip>
              <IonChip color="primary" outline>
                <IonLabel>{t("forum.response")}</IonLabel>
              </IonChip>
              <IonChip color="secondary" outline>
                <IonLabel>{t("forum.opinion")}</IonLabel>
              </IonChip>
              <IonChip color="medium" outline>
                <IonLabel>{t("forum.moments")}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard routerLink={"/forum/post/:id"}>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            内容
          </IonCardContent>
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
        <IonCard routerLink={"/forum/post/:id"}>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>内容</IonCardContent>
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
        <IonCard routerLink={"/forum/post/:id"}>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>内容</IonCardContent>
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
        <IonCard routerLink={"/forum/post/:id"}>
          <IonCardHeader>
            <IonCardSubtitle>标签</IonCardSubtitle>
            <IonCardTitle>标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>内容</IonCardContent>
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
