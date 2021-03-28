import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonLabel,
  IonList, IonItemSliding, IonItem, IonItemOptions,
  IonItemOption, IonAvatar, IonImg,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const Notice: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("notice.notice")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value="unread" onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="unread">
              <IonLabel>{t("notice.unread")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="read">
              <IonLabel>{t("notice.archive")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/notice.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.system")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/task.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.task")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/group.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.group")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Faiyuching</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notice;
