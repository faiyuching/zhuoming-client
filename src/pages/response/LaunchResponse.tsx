import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonButtons, IonSegment, IonBackButton, IonSegmentButton,
  IonItem, IonLabel, IonInput, IonGrid, IonListHeader,
  IonTextarea, IonSelect, IonSelectOption,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios'

const LaunchResponse: React.FC = () => {
  const [value, setValue] = useState('1')
  const { t } = useTranslation();
  const [disaster_type, setDisasterType] = useState()
  const [response_level, setResponseLevel] = useState()
  const [needs_time, setNeedsTime] = useState()
  const [join_mode, setJoinMode] = useState()
  const [need_people, setNeedPeople] = useState()
  const [response_name, setResponseName] = useState("")
  const [slogan, setSlogan] = useState("")
  const [statement, setStatement] = useState("")

  const onSubmit = () => {
    if (disaster_type
      && response_level
      && needs_time
      // && join_mode
      && need_people
      && response_name !== "") {
      axios.post('/response', {
        disaster_type,
        response_level,
        needs_time,
        join_mode,
        need_people,
        response_name,
        user_id: localStorage.getItem("user_id")
      })
        .then(function (res) {
          console.log(res.data)
          // localStorage.setItem("userId", res.data.id)
          window.location.href = "/response/launch/success"
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      alert("请完善信息");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton defaultHref="/response/history" text={t("back")} />
            </IonButton>
          </IonButtons>
          <IonTitle>发起响应</IonTitle>
          <IonButtons slot="end">
            {value !== "1" && <IonButton onClick={() => { setValue(value.slice(1)) }}>{t("library.previous")}</IonButton>}
            {value === "11" ?
              <IonButton onClick={() => { onSubmit() }}>{t("library.complete")}</IonButton> :
              <IonButton onClick={() => { setValue(value + "1") }}>{t("library.next_step")}</IonButton>
            }
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSegment disabled value={value} onIonChange={e => setValue(e.detail.value!)}>
          <IonSegmentButton value="1">
            <IonLabel>{t("library.step_one")}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="11">
            <IonLabel>{t("library.step_two")}</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {value === "1" &&
          <IonGrid>
            <IonListHeader>
              <h2>1. 基本设置</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel position="floating">灾害类型<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonSelect value={disaster_type} interface="action-sheet" onIonChange={e => setDisasterType(e.detail.value)}>
                <IonSelectOption value="meteoro_hydro">{t("library.meteoro_hydro")}</IonSelectOption>
                <IonSelectOption value="geological">{t("library.geological")}</IonSelectOption>
                <IonSelectOption value="marine">{t("library.marine")}</IonSelectOption>
                <IonSelectOption value="biological">{t("library.biological")}</IonSelectOption>
                <IonSelectOption value="ecological">{t("library.ecological")}</IonSelectOption>
                <IonSelectOption value="others">{t("library.others")}</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">响应级别<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonSelect value={response_level} interface="action-sheet" onIonChange={e => setResponseLevel(e.detail.value)}>
                <IonSelectOption value="one">一级</IonSelectOption>
                <IonSelectOption value="two">二级</IonSelectOption>
                <IonSelectOption value="three">三级</IonSelectOption>
                <IonSelectOption value="four">四级</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">需要时间（大概）<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonSelect value={needs_time} interface="action-sheet" onIonChange={e => setNeedsTime(e.detail.value)}>
                <IonSelectOption value="three_days">1-3天</IonSelectOption>
                <IonSelectOption value="one_week">一周</IonSelectOption>
                <IonSelectOption value="half_mouth">半个月</IonSelectOption>
                <IonSelectOption value="one_mouth">一个月</IonSelectOption>
                <IonSelectOption value="two_mouth">两个月</IonSelectOption>
                <IonSelectOption value="half_year">半年</IonSelectOption>
                <IonSelectOption value="one_year">一年</IonSelectOption>
                <IonSelectOption value="over_year">一年以上</IonSelectOption>
              </IonSelect>
            </IonItem>
            {/* <IonItem>
              <IonLabel position="floating">加入模式</IonLabel>
              <IonSelect value={join_mode} interface="action-sheet" onIonChange={e => setJoinMode(e.detail.value)}>
                <IonSelectOption value="all">所有人都可申请加入</IonSelectOption>
                <IonSelectOption value="invite_only">仅被邀请的人才能加入</IonSelectOption>
              </IonSelect>
            </IonItem> */}
            <IonItem>
              <IonLabel position="floating">需要人数<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonSelect value={need_people} interface="action-sheet" onIonChange={e => setNeedPeople(e.detail.value)}>
                <IonSelectOption value="one_ten">1-10</IonSelectOption>
                <IonSelectOption value="ten_thirty">10-30</IonSelectOption>
                <IonSelectOption value="thirty_fifty">30-50</IonSelectOption>
                <IonSelectOption value="fifty_hundred">50-100</IonSelectOption>
                <IonSelectOption value="unlimited">不限</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonGrid>
        }{value === "11" &&
          <IonGrid>
            <IonListHeader>
              <h2>2. 完善响应信息</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel position="floating">响应名称<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonInput value={response_name} onIonChange={e => setResponseName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">口号</IonLabel>
              <IonInput value={slogan} onIonChange={e => setSlogan(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">声明</IonLabel>
              <IonTextarea autoGrow rows={6} value={statement} onIonChange={e => setStatement(e.detail.value!)}></IonTextarea>
            </IonItem>
          </IonGrid>
        }
      </IonContent>
    </IonPage>
  );
};

export default LaunchResponse;
