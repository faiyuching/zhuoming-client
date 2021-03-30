import React, { useState } from 'react';
import {
  IonItem, IonLabel, IonItemGroup, IonAlert,
  IonItemSliding, IonItemOptions, IonItemOption, IonButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const ResponseBaseInfo: React.FC = () => {
  const { t } = useTranslation();
  const [endConfirm, setEndConfirm] = useState(false);
  return (
    <IonItemGroup>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.response_name")}</h2>
            <p>text</p>
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
            <h2>{t("response.disaster_type")}</h2>
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
            <h2>{t("response.response_level")}</h2>
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
            <h2>{t("response.needs_time")}</h2>
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
            <h2>{t("response.join_mode")}</h2>
            <p>所有人可申请加入</p>
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
            <h2>{t("response.statement")}</h2>
            <p>Multiline text that should wrap when it is too long
          to fit on one line in the item...</p>
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