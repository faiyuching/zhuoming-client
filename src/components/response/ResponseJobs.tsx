import React from 'react';
import {
  IonIcon, IonItem, IonLabel, IonItemGroup,
  IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/react';
import { trashOutline, pencilOutline } from 'ionicons/icons';
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
          <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trashOutline} />
          </IonItemOption>
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trashOutline} />
          </IonItemOption>
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trashOutline} />
          </IonItemOption>
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trashOutline} />
          </IonItemOption>
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>
  );
};

export default ResponseJobs;