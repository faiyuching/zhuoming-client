import React from 'react';
import {
  IonItem, IonLabel, IonItemGroup, IonItemSliding, IonItemOptions, 
  IonItemOption,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const ResponseJobs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonItemGroup>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>信息搜集岗</h2>
            <p>Multiline text that should wrap when it is too long
                  to fit on one line in the item...</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption color="danger">删除</IonItemOption>
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>信息核实岗</h2>
            <p>Multiline text that should wrap when it is too long
                  to fit on one line in the item...</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption color="danger">删除</IonItemOption>
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>信息评估岗</h2>
            <p>Multiline text that should wrap when it is too long
                  to fit on one line in the item...</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption color="danger">删除</IonItemOption>
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>信息跟进岗</h2>
            <p>Multiline text that should wrap when it is too long
                  to fit on one line in the item...</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption color="danger">删除</IonItemOption>
          <IonItemOption>编辑</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>
  );
};

export default ResponseJobs;