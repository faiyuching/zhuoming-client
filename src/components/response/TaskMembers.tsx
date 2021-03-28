import React from 'react';
import {
  IonItemOptions, IonItemOption, IonItem, IonLabel,
  IonItemSliding, IonAvatar, IonImg, IonItemGroup
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const TaskMembers: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonItemGroup>
      <IonItemSliding>
        <IonItem button routerLink={'/user'}>
          <IonAvatar slot="start">
            <IonImg src="/assets/avatar.png" />
          </IonAvatar>
          <IonLabel>
            <h2>Faiyuching</h2>
            <p>状态：已提交</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOptions side="end">
            <IonItemOption color="danger">移出</IonItemOption>
          </IonItemOptions>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem button routerLink={'/user'}>
          <IonAvatar slot="start">
            <IonImg src="/assets/avatar.png" />
          </IonAvatar>
          <IonLabel>
            <h2>Faiyuching</h2>
            <p>状态：进行中</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOptions side="end">
            <IonItemOption color="danger">移出</IonItemOption>
          </IonItemOptions>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem button routerLink={'/user'}>
          <IonAvatar slot="start">
            <IonImg src="/assets/avatar.png" />
          </IonAvatar>
          <IonLabel>
            <h2>Faiyuching</h2>
            <p>状态：待审核</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption color="danger">拒绝</IonItemOption>
          <IonItemOption color="primary">同意</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>

  );
};

export default TaskMembers;
