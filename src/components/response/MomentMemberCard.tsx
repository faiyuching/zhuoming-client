import React, { useState, useEffect } from 'react';
import {
  IonLabel, IonCard, IonCardHeader, IonCardSubtitle,
  IonAvatar, IonImg, IonCardTitle, IonItem
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const MomentMemberCard: React.FC = () => {
  const { t } = useTranslation();
  const [moments, setMoments] = useState([{
    User: {
      nickname: "",
      headimgurl: "",
      type: "",
      description: "",
    },
    Task: {
      task_name: ""
    },
    type: "",
    action: "",
    created_at: ""
  }]);

  useEffect(() => {
    axios.get(`/moments?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        let member_moments: any = []
        res.data.forEach((each: any) => {
          if (!each.task_id && !each.post_id) {
            member_moments.push(each)
          }
        })
        setMoments(member_moments)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonCard routerLink={"/response/member"}>
      <IonCardHeader>
        <IonCardSubtitle>{t("response.members")}</IonCardSubtitle>
        <IonCardTitle>{moments.length}</IonCardTitle>
      </IonCardHeader>
      {moments.map((moment, index) => {
        return (
          <IonItem lines="none" key={index}>
            <IonAvatar slot="start">
              <IonImg src={moment.User.headimgurl} />
            </IonAvatar>
            <IonLabel>
              <h2>{moment.User.nickname + " " + t(`response.${moment.action + moment.type}`) + "：" + moment.Task.task_name}</h2>
              <p>{moment.created_at.split(".")[0].replace("T", " ")}</p>
            </IonLabel>
          </IonItem>
        )
      })}
    </IonCard>
  );
};

export default MomentMemberCard;
