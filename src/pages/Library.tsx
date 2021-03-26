import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButtons, IonButton, IonIcon, IonCard, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonImg,
  IonSplitPane, IonMenuButton, IonItem,
} from '@ionic/react';
import { addOutline, arrowForwardOutline } from 'ionicons/icons';
import LibraryMenu from '../components/library/LibraryMenu';

const Library: React.FC = () => {
  return (
    <IonSplitPane contentId="library">
      <LibraryMenu />
      <IonPage id="library">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonMenuButton />
              </IonButton>
            </IonButtons>
            <IonTitle>Library</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem lines="none">
            <IonTitle slot="start">Topics</IonTitle>
            <IonButtons slot="end">
              <IonButton>more<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
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
          <IonItem lines="none">
            <IonTitle slot="start">Videos</IonTitle>
            <IonButtons slot="end">
              <IonButton>more<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonCard href="https://www.bilibili.com/video/BV1rV411y7Pa?p=4" target="blank">
            <IonCardHeader>
              <IonCardSubtitle>海啸｜心理学</IonCardSubtitle>
              <IonCardTitle>【Netflix】Unsolved Mysteries 海啸游魂</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>推荐理由</IonCardContent>
          </IonCard>
          <IonItem lines="none">
            <IonTitle slot="start">Audio</IonTitle>
            <IonButtons slot="end">
              <IonButton>more<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonCard href="https://podcasts.google.com/feed/aHR0cHM6Ly9qdXN0cG9kbWVkaWEuY29tL3Jzcy9sZWZ0LXJpZ2h0LnhtbA/episode/aHR0cHM6Ly9kdHMucG9kdHJhYy5jb20vcmVkaXJlY3QubXAzL2p1c3Rwb2RtZWRpYS5jb20vYXVkaW8vbGVmdC1yaWdodC9sZWZ0cmlnaHQtd2hwajAwNC0yMDIxMDMxOS5tcDM" target="blank">
            <IonImg src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOecqpLxXgkwY4uftuwlaq2JzhVVB63n6NasTwKDTJ9PstcXUe" />
            <IonCardHeader>
              <IonCardSubtitle>行业动态</IonCardSubtitle>
              <IonCardTitle>忽左忽右｜与公益从业者聊聊行业那些事儿</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>推荐理由</IonCardContent>
          </IonCard>
          <IonItem lines="none">
            <IonTitle slot="start">Articles</IonTitle>
            <IonButtons slot="end">
              <IonButton>more<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonCard href="https://mp.weixin.qq.com/s/7E3sxm9MlHs5or6q5f_7jw" target="blank">
            <IonImg src="https://mmbiz.qpic.cn/mmbiz_jpg/eVgFJeI3G7XoGMUYKBYosAESk3ezlINrxH5h86ETP8H72ZEbPEkibuH4iaVRqm9TokcaWcHd8QicvlicvQZ8NQkqtw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" />
            <IonCardHeader>
              <IonCardSubtitle>地震｜心理学</IonCardSubtitle>
              <IonCardTitle>震后灾区的灵异传说，是巨大心理创伤后的一种病症吗？| 日本3·11大地震十周年</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>推荐理由</IonCardContent>
          </IonCard>
          <IonItem lines="none">
            <IonTitle slot="start">Books</IonTitle>
            <IonButtons slot="end">
              <IonButton>more<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonCard href="https://book.douban.com/subject/34820857/" target="blank">
            <IonImg src="/assets/s33496763.jpg" />
            <IonCardHeader>
              <IonCardSubtitle>海啸</IonCardSubtitle>
              <IonCardTitle>巨浪下的小学</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>推荐理由</IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonSplitPane>

  );
};

export default Library;
