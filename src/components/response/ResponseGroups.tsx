import React from 'react';
import {
  IonItem, IonLabel, IonItemGroup,
  IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const ResponseGroups: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonItemGroup>
      <IonItemSliding>
        <IonItem button lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>信息组</h2>
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
        <IonItem button lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>行动组</h2>
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
        <IonItem button lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>产品组</h2>
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

export default ResponseGroups;