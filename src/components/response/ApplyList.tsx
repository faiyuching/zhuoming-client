import React, { useEffect, useState } from 'react';
import {
  IonContent, IonItemDivider, IonCard, IonCardHeader, IonItem, IonLabel,
  IonAvatar, IonImg, IonToolbar, IonHeader, IonButtons, IonButton,
  IonTitle, IonModal, IonRadioGroup, IonListHeader, IonRadio
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

interface popsType {
  openApplyList: boolean
}
const ApplyList: React.FC<popsType> = (props) => {
  const { t } = useTranslation();
  const [showApplyList, setApplyList] = useState(false);
  const [applies, setApplies] = useState([{
    user_id: "",
    task_num: "",
    User: {
      nickname: "",
      headimgurl: ""
    }
  }])

  useEffect(() => {
    setApplyList(props.openApplyList)
    axios.get(`/applies?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        let hash = [];
        for (var i = 0; i < res.data.length; i++) {
          for (var j = i + 1; j < res.data.length; j++) {
            if (res.data[i].user_id === res.data[j].user_id) {
              ++i;
              j = i;
            }
          }
          res.data[i].task_num = 0;
          hash.push(res.data[i]);
        }
        hash.forEach(item => {
          res.data.forEach((each: any) => {
            if (item.user_id === each.user_id) {
              item.task_num++
            }
          })
        });
        setApplies(hash)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.openApplyList])

  return (
    <IonModal isOpen={showApplyList}>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{localStorage.getItem("response_name")}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { setApplyList(false) }}>{t("close")}</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.apply_list")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemDivider>{applies.length}</IonItemDivider>
        {applies.length === 0 ? (
          <IonCard>
            <IonCardHeader>暂无报名</IonCardHeader>
          </IonCard>
        ) : applies.map((apply, index) => {
          return (
            <IonRadioGroup>
              <IonListHeader>信息组</IonListHeader>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src={apply.User.headimgurl} />
                </IonAvatar>
                <IonLabel>
                  <h2>{apply.User.nickname}</h2>
                  <p>正在进行中的任务：{apply.task_num}</p>
                </IonLabel>
                <IonRadio value="faiyuching" />
              </IonItem>
            </IonRadioGroup>
          )
        })}
      </IonContent>
    </IonModal>

  );
};

export default ApplyList;
