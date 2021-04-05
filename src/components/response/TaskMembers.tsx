import React, { useEffect, useState } from 'react';
import {
  IonItemOptions, IonItemOption, IonItem, IonLabel,
  IonItemSliding, IonAvatar, IonImg, IonItemGroup,
  IonCard, IonCardHeader
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router';
import axios from "axios"

interface ParamTypes {
  task_id: string
}

const TaskMembers: React.FC = () => {
  const { t } = useTranslation();
  const { task_id } = useParams<ParamTypes>()
  const [applies, setApplies] = useState([{
    status: "",
    User: {
      user_id: "",
      headimgurl: "",
      nickname: ""
    }
  }])
  useEffect(() => {
    axios.get(`/applies?task_id=${task_id}`)
      .then(function (res) {
        setApplies(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <IonItemGroup>
      {applies.length === 0 ? (
        <IonCard>
          <IonCardHeader>暂无申请</IonCardHeader>
        </IonCard>
      ) : applies.map((apply, index) => {
        return (
          <IonItemSliding key={index}>
            <IonItem routerLink={`/user/${apply.User.user_id}`}>
              <IonAvatar slot="start">
                <IonImg src={apply.User.headimgurl} />
              </IonAvatar>
              <IonLabel>
                <h2>{apply.User.nickname}</h2>
                {apply.status === "applied" && <p style={{ color: "#ffc409" }}>{t(`response.${apply.status}`)}</p>}
                {apply.status === "success" && <p style={{ color: "#2dd36f" }}>{t(`response.${apply.status}`)}</p>}
                {apply.status === "fail" && <p style={{ color: "#eb445a" }}>{t(`response.${apply.status}`)}</p>}
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOptions side="end">
                <IonItemOption color="danger">移出</IonItemOption>
              </IonItemOptions>
            </IonItemOptions>
          </IonItemSliding>
        )
      })}
    </IonItemGroup>

  );
};

export default TaskMembers;
