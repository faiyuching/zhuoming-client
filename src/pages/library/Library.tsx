import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonImg, IonItem, IonGrid, IonRow,
  IonCol, IonSearchbar, IonLabel, IonPopover, IonList
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router';
import queryString from 'querystring'
import LibraryPicker from "../../components/library/LibraryPicker";

export interface ISessionTime {
  weekday: string;
  period: string;
}

const Library: React.FC = () => {
  const { t } = useTranslation();
  const sort = queryString.parse(useLocation().search.split('?')[1]).sort
  const [searchText, setSearchText] = useState('');

  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });

  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [sessionTime, setSessionTime] = useState<ISessionTime | undefined>(
    undefined
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{sort ? t(`library.${sort}`) : t("library.library")}</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={
                (e: any) => {
                  e.persist();
                  setShowPopover({ showPopover: true, event: e })
                }}
            >
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder={t("library.search")} value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
        <IonToolbar>
          <IonItem onClick={() => { setPickerIsOpen(true); }} lines="none">
            {sessionTime ? (
              <IonLabel>{sessionTime?.weekday} - {sessionTime?.period}</IonLabel>
            ) : (
              <IonLabel className="placeHolder">{t("library.all_disaster_types")} - {t("library.all_resource_types")}</IonLabel>
            )}
          </IonItem>
          <IonButtons slot="end">
            <IonButton onClick={() => { setPickerIsOpen(true); }}>{t("library.filter")}</IonButton>
            <IonButton onClick={() => { setSessionTime(undefined); }}>{t("library.clear")}</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonPopover
          cssClass='my-custom-class'
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
        >
          <IonList>
            <IonItem button routerLink={"/library/recommend"} onClick={() => setShowPopover({ showPopover: false, event: undefined })}>{t("library.recommend")}</IonItem>
            <IonItem button routerLink={"/library/topic/new"} >{t("library.create_topic")}</IonItem>
          </IonList>
        </IonPopover>
        <LibraryPicker
          isOpen={pickerIsOpen}
          onCancel={() => {
            setPickerIsOpen(false);
          }}
          onSave={(_value: any) => {
            console.log(_value);
            let { Day, SessionTime } = _value;
            setSessionTime({ weekday: Day.text, period: SessionTime.text });
            setPickerIsOpen(false);
          }}
        />
        <IonGrid>
          <IonRow>
            <IonCol size-lg="4" size-md="6" size-sm="12">
              <IonCard routerLink={"/library/topic"}>
                <IonImg src="https://directorsblog.nih.gov/wp-content/uploads/2020/03/COVID-19-Card-3.jpg" />
                <IonCardHeader>
                  <IonCardSubtitle>COVID-19｜专题</IonCardSubtitle>
                  <IonCardTitle>专题名称</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  专题简介
                  </IonCardContent>
              </IonCard>
              <IonCard href="https://www.bilibili.com/video/BV1rV411y7Pa?p=4" target="blank">
                <IonCardHeader>
                  <IonCardSubtitle>地震，海啸｜视频</IonCardSubtitle>
                  <IonCardTitle>【Netflix】Unsolved Mysteries 海啸游魂</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>推荐理由</IonCardContent>
              </IonCard>
              <IonCard href="https://podcasts.google.com/feed/aHR0cHM6Ly9qdXN0cG9kbWVkaWEuY29tL3Jzcy9sZWZ0LXJpZ2h0LnhtbA/episode/aHR0cHM6Ly9kdHMucG9kdHJhYy5jb20vcmVkaXJlY3QubXAzL2p1c3Rwb2RtZWRpYS5jb20vYXVkaW8vbGVmdC1yaWdodC9sZWZ0cmlnaHQtd2hwajAwNC0yMDIxMDMxOS5tcDM" target="blank">
                <IonImg src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOecqpLxXgkwY4uftuwlaq2JzhVVB63n6NasTwKDTJ9PstcXUe" />
                <IonCardHeader>
                  <IonCardSubtitle>行业动态｜音频</IonCardSubtitle>
                  <IonCardTitle>忽左忽右｜与公益从业者聊聊行业那些事儿</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>推荐理由</IonCardContent>
              </IonCard>
              <IonCard href="https://mp.weixin.qq.com/s/7E3sxm9MlHs5or6q5f_7jw" target="blank">
                <IonCardHeader>
                  <IonCardSubtitle>地震，海啸｜文章</IonCardSubtitle>
                  <IonCardTitle>震后灾区的灵异传说，是巨大心理创伤后的一种病症吗？| 日本3·11大地震十周年</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>推荐理由</IonCardContent>
              </IonCard>
              <IonCard href="https://book.douban.com/subject/34820857/" target="blank">
                <IonImg src="/assets/s33496763.jpg" />
                <IonCardHeader>
                  <IonCardSubtitle>地震，海啸｜书籍</IonCardSubtitle>
                  <IonCardTitle>巨浪下的小学</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>推荐理由</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>

  );
};

export default Library;
