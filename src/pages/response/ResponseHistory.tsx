import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonToast,
  IonTitle, IonToolbar, IonButton, IonButtons,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { closeOutline } from 'ionicons/icons';

const ResponseHistory: React.FC = () => {
  const { t } = useTranslation();
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(true);
  const [responses, setResponses] = useState([{
    id: "",
    response_name: "",
    begin_time: "",
    end_time: ""
  }]);

  useEffect(() => {
    axios.get('/responses')
      .then(function (res) {
        const responseList = res.data
        responseList.pop()
        setResponses(responseList)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton text={t("back")} />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("response.history")}</IonTitle>
          <IonButtons slot="end">
            <IonButton>{t("response.launch_response")}</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Your settings have been saved."
          duration={200}
        />

        <IonToast
          isOpen={showToast2}
          onDidDismiss={() => setShowToast2(false)}
          color="medium"
          message="正在响应：长江洪灾II级响应"
          position="top"
          buttons={[
            {
              side: 'start',
              icon: closeOutline,
              handler: () => {
                console.log('Favorite clicked');
              }
            },
            {
              text: '查看',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]}
        />
        {responses.length === 0 ? (
          <IonCard>
            <IonCardHeader>暂无历史响应</IonCardHeader>
          </IonCard>
        ) : responses.map((response, index) => {
          return (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardSubtitle>{response.begin_time.split(".")[0].replace("T", " ")}{response.end_time}｜参与人数</IonCardSubtitle>
                <IonCardTitle>{response.response_name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>结果：完成几个任务｜产出几个产品｜完成几次讨论</IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default ResponseHistory;
