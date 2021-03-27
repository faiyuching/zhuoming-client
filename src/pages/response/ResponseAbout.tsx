import React from 'react';
import {
  IonContent, IonHeader, IonMenuButton,
  IonPage, IonTitle, IonToolbar, IonSplitPane, IonIcon,
  IonButtons, IonItem, IonLabel, IonItemGroup,
  IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/react';
import { pencilOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";

const ResponseAbout: React.FC = () => {
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
            <IonTitle size="large">{t("response.about")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
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
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseAbout;
