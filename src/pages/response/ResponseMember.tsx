import React from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonIcon, IonItemOptions,
  IonPage, IonTitle, IonToolbar, IonSplitPane, IonItemGroup, IonItemOption,
  IonButton, IonButtons, IonItem, IonLabel, IonItemSliding,
} from '@ionic/react';
import { trashOutline, pencilOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";

const ResponseMember: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{t("response.response")}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.member")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("response.add_group")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
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
                <IonItemOption color="danger">
                  <IonIcon slot="icon-only" icon={trashOutline} />
                </IonItemOption>
                <IonItemOption>
                  <IonIcon slot="icon-only" icon={pencilOutline} />
                </IonItemOption>
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
                <IonItemOption color="danger">
                  <IonIcon slot="icon-only" icon={trashOutline} />
                </IonItemOption>
                <IonItemOption>
                  <IonIcon slot="icon-only" icon={pencilOutline} />
                </IonItemOption>
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
                <IonItemOption color="danger">
                  <IonIcon slot="icon-only" icon={trashOutline} />
                </IonItemOption>
                <IonItemOption>
                  <IonIcon slot="icon-only" icon={pencilOutline} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonItemGroup>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseMember;
