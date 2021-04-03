import React, { useCallback, useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonSplitPane, IonFooter,
  IonTitle, IonToolbar, IonButton, IonButtons, IonLabel, IonIcon,
  IonCard, IonCardHeader, IonCardSubtitle, IonAvatar, IonImg,
  IonCardTitle, IonCardContent, IonItem, IonGrid, IonRow, IonCol, IonMenuButton, IonNote,
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { closeOutline, notificationsOutline } from 'ionicons/icons';

const Response: React.FC = () => {
  const { t } = useTranslation();
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(true);
  const [response, setResponse] = useState({
    id: "",
    response_name: "",
    created_at: "",
    end_time: ""
  });

  useEffect(() => {
    axios.get('/response/current')
      .then(function (res) {
        console.log(res.data)
        setResponse(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  const loginAlert = () => {
    alert("请先登录")
  }
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonButton slot="start">
                <IonMenuButton />
              </IonButton>
            </IonButtons>
            <IonTitle>{response.response_name}</IonTitle>
            <IonButtons slot="end">
              {localStorage.getItem("user_id") && <IonButton onClick={() => { loginAlert() }}>加入</IonButton>}
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">总览</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon color="danger" icon={notificationsOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>任务</IonCardSubtitle>
                    <IonCardTitle>10</IonCardTitle>
                  </IonCardHeader>
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <IonImg src="/assets/avatar.png" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>刚刚：完成任务</h2>
                      <IonNote>搜集微博灾情信息</IonNote>
                    </IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <IonImg src="/assets/avatar.png" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>一小时前：发布任务</h2>
                      <p>搜集微博灾情信息</p>
                    </IonLabel>
                  </IonItem>
                </IonCard>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>成员</IonCardSubtitle>
                    <IonCardTitle>20</IonCardTitle>
                  </IonCardHeader>
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <IonImg src="/assets/avatar.png" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>刚刚：发布任务</h2>
                      <p>搜集微博灾情信息</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <IonImg src="/assets/avatar.png" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>刚刚：发布任务</h2>
                      <p>搜集微博灾情信息</p>
                    </IonLabel>
                  </IonItem>
                </IonCard>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>讨论</IonCardSubtitle>
                    {/* <IonCardTitle>20</IonCardTitle> */}
                  </IonCardHeader>
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <IonImg src="/assets/avatar.png" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>刚刚：提问</h2>
                      <p>请问哪里可以找到XXX</p>
                    </IonLabel>
                  </IonItem>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Response;
