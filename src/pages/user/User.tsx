import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton,
  IonSegment, IonSegmentButton, IonLabel,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonItem,
  IonImg, IonThumbnail, IonNote, IonBackButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { useLocation } from 'react-router';
import queryString from 'querystring'

const User: React.FC = () => {
  const { t } = useTranslation();
  const user_id = queryString.parse(useLocation().search.split('?')[1]).id
  const [userInfo, serUserInfo] = useState({
    nickname: "",
    shimo: "",
    headimgurl: "",
    role: "",
    job: "",
    introduction: ""
  })
  const [status, setStatus] = useState<string>("success")
  const [tasks, setTasks] = useState([
    {
      Response: {
        response_name: ""
      },
      Group: {
        group_name: ""
      },
      Job: {
        job_name: ""
      },
      Task: {
        task_id: "",
        task_name: "",
        description: "",
      },
      status: "",
    }
  ]);

  useEffect(() => {
    if (user_id) {
      axios.get(`/user/${user_id}`)
        .then(function (res) {
          serUserInfo(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    } else if (localStorage.getItem("user_id")) {
      axios.get(`/user/${localStorage.getItem("user_id")}`)
        .then(function (res) {
          serUserInfo(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      window.location.href = "/user/login"
    }
  }, [])

  useEffect(() => {
    axios.get(`/applies?user_id=${localStorage.getItem("user_id")}&status=${status}`)
      .then(function (res) {
        console.log(res.data)
        setTasks(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [status])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {user_id ? <IonBackButton text={t("back")} /> : <IonButton routerLink={'/user/follow'}>{t("user.follow")}</IonButton>}
          </IonButtons>
          {!user_id && <IonTitle>{t("user.me")}</IonTitle>}
          <IonButtons slot="end">
            {!user_id && <IonButton routerLink={'/user/settings'}>{t("user.settings")}</IonButton>}
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonItem lines="none" button routerLink={user_id ? `/user/profile?id=${user_id}` : "/user/profile"}>
            <IonThumbnail slot="start">
              <IonImg style={{ borderRadius: "50%" }} src={userInfo.headimgurl} />
            </IonThumbnail>
            <IonLabel>
              <h1><strong>{userInfo.nickname}</strong></h1>
              <p>
                {userInfo.role === "user" && "用户"}
                {userInfo.role === "volunteer" && "志愿者"}
                {userInfo.role === "developer" && "开发者"}
                {userInfo.role === "admin" && "管理员"}
                {userInfo.role === "super_admin" && "0号员工"}
                {userInfo.job && ("-" + userInfo.job)}
                {userInfo.introduction && ("-" + userInfo.introduction)}
              </p>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonNote>石墨账号：{userInfo.shimo || "未填写"}</IonNote>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="none">
          <IonSegment value={status} onIonChange={e => setStatus(e.detail.value!)}>
            <IonSegmentButton value="success">
              <IonLabel>{t("user.unfinished")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="end">
              <IonLabel>{t("user.finished")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonItem>
        {tasks.length === 0 ? (
          <IonCard>
            <IonCardHeader>暂无任务</IonCardHeader>
          </IonCard>
        ) : tasks.map((task, index) => {
          return (
            <IonCard key={index} routerLink={`/response/task/${task.Task.task_id}`}>
              <IonCardHeader>
                <IonCardSubtitle>{task.Group.group_name}｜{task.Job.job_name}</IonCardSubtitle>
                <IonCardTitle>{task.Task.task_name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{task.Task.description}</IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default User;
