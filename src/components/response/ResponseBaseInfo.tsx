import React, { useEffect, useState } from 'react';
import {
  IonItem, IonLabel, IonItemGroup, IonAlert,
  IonItemSliding, IonItemOptions, IonItemOption, IonButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const ResponseBaseInfo: React.FC = () => {
  const { t } = useTranslation();
  const [endConfirm, setEndConfirm] = useState(false);

  const [response, setResponse] = useState({
    response_name: "",
    disaster_type: "",
    response_level: "",
    begin_time: "",
    needs_time: "",
    end_time: "",
    join_mode: "",
    need_people: "",
    statement: "",
    User: {
      username: ""
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
            <h2>{t("response.response_name")}</h2>
            <p>{response.response_name}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>
            编辑
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.organizer")}</h2>
            <p>{response.User.username}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.disaster_type")}</h2>
            <p>{response.disaster_type}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.response_level")}</h2>
            <p>{response.response_level}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.begin_time")}</h2>
            <p>{response.begin_time.split(".")[0].replace("T", " ")}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.needs_time")}</h2>
            <p>{response.needs_time}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.end_time")}</h2>
            <p>{response.end_time}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.join_mode")}</h2>
            <p>{response.join_mode}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.need_people")}</h2>
            <p>{response.need_people}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.statement")}</h2>
            <p>{response.statement}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonButton onClick={() => setEndConfirm(true)} fill="outline" expand="block" color="danger">结束响应</IonButton>
      <IonAlert
        isOpen={endConfirm}
        onDidDismiss={() => setEndConfirm(false)}
        header={t("response.end_confirm")}
        message={t("response.end_message")}
        buttons={[
          {
            text: t("response.okay"),
            handler: () => {
              console.log('Confirm Okay');
            }
          },
          {
            text: t("response.cancel"),
            role: 'cancel',
            cssClass: 'secondary',
            handler: blah => {
              console.log('Confirm Cancel: blah');
            }
          }
        ]}
      />
    </IonItemGroup>
  );
};

export default ResponseBaseInfo;