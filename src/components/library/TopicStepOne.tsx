import React from 'react';
import {
  IonList, IonListHeader, IonLabel, IonItem,
  IonInput, IonTextarea, IonButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const TopicStepOne: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonListHeader>一、基本设置</IonListHeader>
      <IonItem>
        <IonLabel position="floating">专题名称</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">专题简介</IonLabel>
        <IonTextarea autoGrow></IonTextarea>
      </IonItem>
      <IonItem lines="none">
        <IonButton>选择图片</IonButton>
      </IonItem>
    </IonList>

  );
};

export default TopicStepOne;
