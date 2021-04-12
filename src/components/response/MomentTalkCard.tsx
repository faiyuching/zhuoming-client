import React, { useState, useEffect } from 'react';
import {
  IonLabel, IonCard, IonCardHeader, IonCardSubtitle,
  IonAvatar, IonImg, IonCardTitle, IonItem
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const MomentTalkCard: React.FC = () => {
  const { t } = useTranslation();
  const [moments, setMoments] = useState([{
    User: {
      nickname: "",
      headimgurl: "",
      type: "",
      description: "",
    },
    Post: {
      content: ""
    },
    type: "",
    action: "",
    created_at: ""
  }]);

  useEffect(() => {
    axios.get(`/moments?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        let post_moments: any = []
        res.data.forEach((each: any) => {
          if (each.post_id) {
            post_moments.push(each)
          }
        })
        setMoments(post_moments)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonCard routerLink={"/forum?tag="}>
      <IonCardHeader>
        <IonCardSubtitle>{t("response.talks")}</IonCardSubtitle>
        <IonCardTitle>{moments.length}</IonCardTitle>
      </IonCardHeader>
      {moments.map((moment, index) => {
        return (
          <IonItem lines="none" key={index}>
            <IonAvatar slot="start">
              <IonImg src={moment.User.headimgurl} />
            </IonAvatar>
            <IonLabel>
              <h2>{moment.User.nickname + " " + t(`response.${moment.action + moment.type}`) + "：" + moment.Post.content}</h2>
              <p>{moment.created_at.split(".")[0].replace("T", " ")}</p>
            </IonLabel>
          </IonItem>
        )
      })}
    </IonCard>
  );
};

export default MomentTalkCard;
