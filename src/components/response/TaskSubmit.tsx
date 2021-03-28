import React from 'react';
import {
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const TaskSubmit: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>提交人｜提交时间</IonCardSubtitle>
              <IonCardTitle>信息标题</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>信息内容</IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TaskSubmit;
