import React from 'react';
import {
  IonIcon, IonItem, IonLabel, IonItemGroup,
  IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/react';
import { pencilOutline } from 'ionicons/icons';
import { useTranslation } from "react-i18next";

const ResponseBaseInfo: React.FC = () => {
  const { t } = useTranslation();
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
            <IonIcon slot="icon-only" icon={pencilOutline} />
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
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem lines="full">
          <IonLabel className="ion-text-wrap">
            <h2>{t("response.disaster_level")}</h2>
            <p>text</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
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
          <IonItemOption>
            <IonIcon slot="icon-only" icon={pencilOutline} />
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>
  );
};

export default ResponseBaseInfo;