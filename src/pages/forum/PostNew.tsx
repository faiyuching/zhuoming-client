import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonItem, IonButtons, IonButton, IonBackButton,
  IonLabel, IonInput, IonTextarea,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const PostNew: React.FC = () => {
  const { t } = useTranslation();
  const [tag, setTag] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    axios.post('/post', { tag, content })
      .then(function (res) {

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonBackButton defaultHref="/forum" text={t("back")} />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("forum.forum")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">发帖</IonTitle>
          <IonButtons slot="end">
            <IonButton>发布</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {/* <IonItem>
            <IonLabel position="stacked">帖子标题</IonLabel>
            <IonInput value={}></IonInput>
          </IonItem> */}
          <IonItem>
            <IonLabel position="stacked">帖子内容</IonLabel>
            <IonTextarea autoGrow></IonTextarea>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PostNew;
