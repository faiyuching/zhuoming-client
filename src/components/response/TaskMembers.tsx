import React from 'react';
import {
  IonIcon, IonItemOptions, IonItemOption,
  IonItem, IonLabel, IonItemSliding, IonAvatar, IonImg
} from '@ionic/react';
import { trashOutline, pencilOutline } from 'ionicons/icons';
import { useTranslation } from "react-i18next";

const TaskMembers: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonItemSliding>
      <IonItem button routerLink={'/user'}>
        <IonAvatar slot="start">
          <IonImg src="/assets/avatar.png" />
        </IonAvatar>
        <IonLabel>
          <h2>Faiyuching</h2>
          <p>正在进行中的任务：x个</p>
        </IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="danger">
          <IonIcon slot="icon-only" icon={trashOutline} />
        </IonItemOption>
        <IonItemOption>
          <IonIcon slot="icon-only" icon={pencilOutline} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default TaskMembers;
