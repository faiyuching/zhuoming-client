import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonImg, IonLabel,
  IonList, IonListHeader, IonItem, IonButtons, IonButton, IonBackButton, IonIcon,

} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { heart, heartOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import axios from "axios"

interface ParamTypes {
  post_id: string
}

const PostDetail: React.FC = () => {
  const { t } = useTranslation();
  const { post_id } = useParams<ParamTypes>()
  const [post, setPost] = useState({
    post_id: "",
    post_content: "",
    User: {
      nickname: "",
      headimgurl: "",
      role: "",
      job: "",
      introduction: ""
    }
  })

  useEffect(() => {
    axios.get(`/forum/post/${post_id}`)
      .then(function (res) {
        setPost(res.data)
        console.log(res.data)
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
          <IonButtons slot="end">
            <IonButton color="danger">
              123
              <IonIcon slot="end" icon={heart} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="none" routerLink={"/user"}>
          <IonAvatar slot="start">
            <IonImg src={post.User.headimgurl} />
          </IonAvatar>
          <IonLabel>
            <h2>{post.User.nickname}</h2>
            <p>{post.User.introduction}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <p>{post.post_content}</p>
        </IonItem>
        <IonItem lines="none" routerLink={"/user"}>
          <IonAvatar slot="start">
            <IonImg src="/assets/avatar.png" />
          </IonAvatar>
          <IonLabel className="ion-text-wrap">
            <h2>Faiyuching</h2>
            <p>@username</p>
          </IonLabel>
        </IonItem><IonItem >
          <p>评论内容</p>
        </IonItem>

        <IonItem lines="none" routerLink={"/user"}>
          <IonAvatar slot="start">
            <IonImg src="/assets/avatar.png" />
          </IonAvatar>
          <IonLabel className="ion-text-wrap">
            <h2>Faiyuching</h2>
            <p>@username</p>
          </IonLabel>
        </IonItem><IonItem >
          <p>评论内容</p>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default PostDetail;
