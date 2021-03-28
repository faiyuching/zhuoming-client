import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonImg, IonLabel,
  IonList, IonListHeader, IonItem, IonButtons, IonButton, IonBackButton, IonIcon, IonItemDivider,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { heart, heartOutline } from 'ionicons/icons';

const PostDetail: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonBackButton defaultHref="/forum" text="" />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("forum.forum")}</IonTitle>
          <IonButtons slot="end">
            <IonButton color="danger">
              123
              <IonIcon slot="end" icon={heart} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>标题</IonListHeader>
          <IonItem lines="none" routerLink={"/user"}>
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Faiyuching</h2>
              <p>@username</p>
            </IonLabel>
          </IonItem>
          <IonItem >
            <p>赫鲁晓夫同志1959年访美，同美国总统一起访问当地的一个百货超市。
            赫鲁晓夫对美国总统称赞百货超市里东西琳琅满目，应有尽有，像是到了人间天堂。
            美国总统问：赫鲁晓夫先生，见到了这个超市，你还敢说，社会主义一定比资本主义先进吗？
            赫鲁晓夫说：确实，这里有很多东西我们苏联是没有的，但我们今后经济发达了总是会有的。
            而有一样东西你们美国永远都不可能有。美国总统很好奇，问到有什么东西美国永远都不会有。
              赫鲁晓夫笑道：国家元首终身制。</p>
          </IonItem>
          <IonItemDivider>评论</IonItemDivider>
          <IonItem lines="none" routerLink={"/user"}>
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar.png" />
            </IonAvatar>
            <IonLabel className="ion-text-wrap">
              <h2>Faiyuching</h2>
              <p>@username</p>
            </IonLabel>
          </IonItem><IonItem >
            <p>评论内容</p>
          </IonItem>

          <IonItem lines="none" routerLink={"/user"}>
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar.png" />
            </IonAvatar>
            <IonLabel className="ion-text-wrap">
              <h2>Faiyuching</h2>
              <p>@username</p>
            </IonLabel>
          </IonItem><IonItem >
            <p>评论内容</p>
          </IonItem>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PostDetail;
