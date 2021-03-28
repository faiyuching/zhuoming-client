import React from 'react';
import {
  IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const TopicStepTwo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonRadioGroup>
        <IonListHeader>二、选择文件</IonListHeader>
        <IonItem>
          <IonLabel>文件列表</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>file1</IonLabel>
          <IonRadio value="file1" />
        </IonItem>
        <IonItem>
          <IonLabel>file2</IonLabel>
          <IonRadio value="file2" />
        </IonItem>
        <IonItem>
          <IonLabel>file3</IonLabel>
          <IonRadio value="file3" />
        </IonItem>
      </IonRadioGroup>
    </IonList>

  );
};

export default TopicStepTwo;
