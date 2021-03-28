import React from 'react';
import {
  IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const StepOne: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonRadioGroup>
        <IonListHeader>一、请选择资源类型</IonListHeader>
        <IonItem>
          <IonLabel>{t("library.video")}</IonLabel>
          <IonRadio value="video" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.audio")}</IonLabel>
          <IonRadio value="audio" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.picture")}</IonLabel>
          <IonRadio value="picture" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.article")}</IonLabel>
          <IonRadio value="article" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.book")}</IonLabel>
          <IonRadio value="book" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.brief_report")}</IonLabel>
          <IonRadio value="brief_report" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.doc")}</IonLabel>
          <IonRadio value="doc" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.pdf")}</IonLabel>
          <IonRadio value="pdf" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.excel")}</IonLabel>
          <IonRadio value="excel" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.ppt")}</IonLabel>
          <IonRadio value="ppt" />
        </IonItem>
      </IonRadioGroup>
    </IonList>

  );
};

export default StepOne;
