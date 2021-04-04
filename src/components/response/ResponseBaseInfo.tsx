import React, { useEffect, useState } from 'react';
import {
  IonItem, IonLabel, IonItemGroup,
  IonItemSliding, IonItemOptions, IonItemOption
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const ResponseBaseInfo: React.FC = () => {
  const { t } = useTranslation();

  const [response, setResponse] = useState({
    response_name: "",
    disaster_type: "",
    response_level: "",
    created_at: "",
    needs_time: "",
    end_time: "",
    join_mode: "",
    need_people: "",
    statement: "",
    User: {
      nickname: ""
    }
  });


  useEffect(() => {
    axios.get(`/response/${localStorage.getItem("response_id")}`)
      .then(function (res) {
        setResponse(res.data)
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
            <p>{t("response.response_name")}</p>
            <h2>{response.response_name}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.organizer")}</p>
            <h2>{response.User.nickname}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.disaster_type")}</p>
            <h2>{t(`library.${response.disaster_type}`)}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.response_level")}</p>
            <h2>{t(`response.${response.response_level}`)}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.begin_time")}</p>
            <h2>{response.created_at.split(".")[0].replace("T", " ")}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.needs_time")}</p>
            <h2>{t(`response.${response.needs_time}`)}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.end_time")}</p>
            <h2>{response.end_time ? response.end_time.split(".")[0].replace("T", " ") : "未知"}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.join_mode")}</p>
            <h2>{t(`response.${response.join_mode}`)}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.need_people")}</p>
            <h2>{t(`response.${response.need_people}`)}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <p>{t("response.statement")}</p>
            <h2>{response.statement || "未填写"}</h2>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>{t("edit")}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>
  );
};

export default ResponseBaseInfo;