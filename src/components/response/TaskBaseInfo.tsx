import React, { useState, useEffect } from 'react';
import {
  IonItem, IonLabel, IonItemGroup,
  IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router';
import axios from "axios";

interface ParamTypes {
  task_id: string
}

const TaskBaseInfo: React.FC = () => {
  const { t } = useTranslation();
  const { task_id } = useParams<ParamTypes>()
  const [task, setTask] = useState({
    task_name: "",
    description: "",
    need_people: "",
    end_time: "",
    created_at: "",
    User: {
      user_id: "",
      nickname: ""
    }
  })

  useEffect(() => {
    axios.get(`/task/${task_id}`)
      .then(function (res) {
        setTask(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonItemGroup>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.task_name")}</p>
            <h2>{task.task_name}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full" routerLink={`/user?id=${task.User.user_id}`}>
          <IonLabel className="ion-text-wrap">
            <p>{t("response.task_principal")}</p>
            <h2>{task.User.nickname}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.begin_time")}</p>
            <h2>{task.created_at.split(".")[0].replace("T", " ")}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.end_time")}</p>
            <h2>{task.end_time === null ? "未知" : task.end_time.split(".")[0].replace("T", " ")}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.need_people")}</p>
            <h2>{task.need_people}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.task_content")}</p>
            <h2>{task.description === null ? "未填写" : task.description}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.task_resources")}</p>
            <h2></h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.task_tool")}</p>
            <h2></h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.task_talk")}</p>
            <h2></h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>
  );
};

export default TaskBaseInfo;
