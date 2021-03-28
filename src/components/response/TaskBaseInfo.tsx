import React from 'react';
import {
  IonItem, IonLabel, IonItemGroup,
  IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const TaskBaseInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonItemGroup>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.task_name")}</h2>
            <p>text</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.task_creator")}</h2>
            <p>text</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.task_principal")}</h2>
            <p>text</p>
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
            <p>text</p>
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
            <p>text</p>
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
            <p>text（现有人数）</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.task_content")}</h2>
            <p>text</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.task_resources")}</h2>
            <p>text</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.task_tool")}</h2>
            <p>text</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.task_talk")}</h2>
            <p>text</p>
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
