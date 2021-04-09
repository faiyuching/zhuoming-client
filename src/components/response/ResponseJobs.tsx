import React, { useEffect, useState } from 'react';
import {
  IonItem, IonLabel, IonItemGroup, IonItemSliding, IonItemOptions,
  IonItemOption, IonCard, IonCardHeader, IonButtons, IonButton,
  IonModal, IonContent, IonHeader, IonToolbar, IonTitle,
  IonInput, IonTextarea, IonSelect, IonSelectOption
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Toast from "../../components/Toast"

const ResponseJobs: React.FC = () => {
  const { t } = useTranslation();
  const [showAddJob, setShowAddJob] = useState(false);
  const [group_id, setGroupId] = useState("")
  const [job_name, setJobName] = useState("")
  const [description, setDescription] = useState("")
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  const [jobs, setJobs] = useState([
    {
      job_id: "",
      job_name: "",
      description: ""
    }
  ]);
  const [groups, setGroups] = useState([
    {
      group_id: "",
      group_name: "",
    }
  ]);


  useEffect(() => {
    axios.get(`/jobs?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        console.log(res.data)
        setJobs(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [showSuccessToast])

  useEffect(() => {
    axios.get(`/groups?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        setGroups(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const addGroup = () => {
    if (job_name !== "") {
      axios.post("/job", {
        user_id: localStorage.getItem("user_id"),
        job_name,
        group_id,
        description,
        response_id: localStorage.getItem("response_id")
      })
        .then(function (res) {
          setShowAddJob(false)
          setShowSuccessToast(true)
          setGroupId("")
          setJobName("")
          setDescription("")
        })
        .catch(function (error) {
          console.log(error);
          setShowAddJob(false)
          setShowFailToast(true)
        })
    } else {
      alert("请填写岗位名")
    }
    setShowSuccessToast(false)
    setShowFailToast(false)
  }

  return (
    <IonItemGroup>
      {jobs.length === 0 ? (
        <IonCard>
          <IonCardHeader>暂无岗位</IonCardHeader>
        </IonCard>
      ) : jobs.map((job, index) => {
        return (
          <IonItemSliding key={index}>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>{job.job_name}</h2>
                <p>{job.description}</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger">{t("delete")}</IonItemOption>
              <IonItemOption>{t("edit")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        )
      })}
      <IonItem lines="none">
        <IonButtons slot="end">
          <IonButton onClick={() => { setShowAddJob(true) }}>添加岗位</IonButton>
        </IonButtons>
      </IonItem>
      <Toast open={showSuccessToast} message={"添加岗位成功！"} duration={1000} color={"success"} />
      <Toast open={showFailToast} message={"添加岗位失败！"} duration={1000} color={"danger"} />
      <IonModal isOpen={showAddJob} >
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => { setShowAddJob(false) }}>{t("close")}</IonButton>
              </IonButtons>
              <IonTitle>添加岗位</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => { addGroup() }}>{t("ok")}</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonItem>
            <IonLabel position="floating">组别<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
            <IonSelect value={group_id} interface="action-sheet" onIonChange={e => setGroupId(e.detail.value)}>
              {groups.map((group, index) => {
                return (
                  <IonSelectOption key={index} value={group.group_id}>{group.group_name}</IonSelectOption>
                )
              })}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">岗位名<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
            <IonInput value={job_name} onIonChange={e => setJobName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">描述</IonLabel>
            <IonTextarea autoGrow rows={6} value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonContent>
      </IonModal>
    </IonItemGroup>
  );
};

export default ResponseJobs;