import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButtons, IonButton, IonIcon, IonCard, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonImg,
  IonSplitPane, IonMenuButton, IonItem, IonGrid, IonRow, IonCol,
} from '@ionic/react';
import { addOutline, arrowForwardOutline } from 'ionicons/icons';
import LibraryMenu from '../components/library/LibraryMenu';
import { useTranslation } from "react-i18next";

const Library: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonSplitPane contentId="library">
      <LibraryMenu />
      <IonPage id="library">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonMenuButton />{t("library.sort")}
              </IonButton>
            </IonButtons>
            <IonTitle>{t("library.library")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("library.recent")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem lines="none">
            <IonTitle slot="start">{t("library.topics")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("library.more")}<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size-lg="4" size-md="6" size-sm="12">
                <IonCard>
                  <IonImg src="https://directorsblog.nih.gov/wp-content/uploads/2020/03/COVID-19-Card-3.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>COVID-19</IonCardSubtitle>
                    <IonCardTitle>Topic name</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    test
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem lines="none">
            <IonTitle slot="start">{t("library.videos")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("library.more")}<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size-lg="4" size-md="6" size-sm="12">
                <IonCard href="https://www.bilibili.com/video/BV1rV411y7Pa?p=4" target="blank">
                  <IonCardHeader>
                    <IonCardSubtitle>海啸｜心理学</IonCardSubtitle>
                    <IonCardTitle>【Netflix】Unsolved Mysteries 海啸游魂</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>推荐理由</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem lines="none">
            <IonTitle slot="start">{t("library.audio")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("library.more")}<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size-lg="4" size-md="6" size-sm="12">
                <IonCard href="https://podcasts.google.com/feed/aHR0cHM6Ly9qdXN0cG9kbWVkaWEuY29tL3Jzcy9sZWZ0LXJpZ2h0LnhtbA/episode/aHR0cHM6Ly9kdHMucG9kdHJhYy5jb20vcmVkaXJlY3QubXAzL2p1c3Rwb2RtZWRpYS5jb20vYXVkaW8vbGVmdC1yaWdodC9sZWZ0cmlnaHQtd2hwajAwNC0yMDIxMDMxOS5tcDM" target="blank">
                  <IonImg src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOecqpLxXgkwY4uftuwlaq2JzhVVB63n6NasTwKDTJ9PstcXUe" />
                  <IonCardHeader>
                    <IonCardSubtitle>行业动态</IonCardSubtitle>
                    <IonCardTitle>忽左忽右｜与公益从业者聊聊行业那些事儿</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>推荐理由</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem lines="none">
            <IonTitle slot="start">{t("library.articles")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("library.more")}<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size-lg="4" size-md="6" size-sm="12">
                <IonCard href="https://mp.weixin.qq.com/s/7E3sxm9MlHs5or6q5f_7jw" target="blank">
                  <IonCardHeader>
                    <IonCardSubtitle>地震｜心理学</IonCardSubtitle>
                    <IonCardTitle>震后灾区的灵异传说，是巨大心理创伤后的一种病症吗？| 日本3·11大地震十周年</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>推荐理由</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem lines="none">
            <IonTitle slot="start">{t("library.books")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("library.more")}<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size-lg="4" size-md="6" size-sm="12">
                <IonCard href="https://book.douban.com/subject/34820857/" target="blank">
                  <IonImg src="/assets/s33496763.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>海啸</IonCardSubtitle>
                    <IonCardTitle>巨浪下的小学</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>推荐理由</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonSplitPane>

  );
};

export default Library;
