import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonPage, IonIcon, IonTextarea,
  IonTitle, IonToolbar, IonSplitPane, IonButton, IonButtons, IonModal, IonSelect,
  IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonInput,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonItemDivider,
  IonSelectOption
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Toast from "../../components/Toast"

const ResponseTasks: React.FC = () => {
  const { t } = useTranslation();
  const [showAddTask, setShowAddTask] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);

  const [task_name, setTaskName] = useState("")
  const [group_id, setGroupId] = useState("")
  const [job_id, setJobId] = useState("")
  const [description, setDescription] = useState("")

  const [groups, setGroups] = useState([{ group_id: "", group_name: "" }]);
  const [jobs, setJobs] = useState([{ job_id: "", job_name: "" }]);
  const [tasks, setTasks] = useState([
    {
      task_id: "",
      task_name: "",
      description: "",
      Group: {
        group_name: ""
      },
      Job: {
        job_name: ""
      }
    }
  ]);


  useEffect(() => {
    axios.get(`/tasks?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {

        setTasks(res.data)
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

  useEffect(() => {
    axios.get(`/jobs?response_id=${localStorage.getItem("response_id")}&group_id=${group_id}`)
      .then(function (res) {
        setJobs(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const addTask = () => {
    if (task_name !== "") {
      axios.post("/task", {
        user_id: localStorage.getItem("user_id"),
        task_name,
        description,
        response_id: localStorage.getItem("response_id"),
        group_id,
        job_id
      })
        .then(function (res) {
          setShowAddTask(false)
          setShowSuccessToast(true)
          setTaskName("")
          setGroupId("")
          setJobId("")
          setDescription("")
        })
        .catch(function (error) {
          console.log(error);
          setShowAddTask(false)
          setShowFailToast(true)
        });
    } else {
      alert("请填写任务名称")
    }
    setShowSuccessToast(false)
    setShowFailToast(false)
  }

  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{localStorage.getItem("response_name")}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { setShowAddTask(true) }}>
                {t("response.create_task")}
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.tasks")}</IonTitle>
            <IonButtons slot="end">
              <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                <IonSegmentButton value="unfinished">
                  <IonLabel>{t("response.unfinished")}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="finished">
                  <IonLabel>{t("response.finished")}</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItemDivider>{tasks.length + " "}{t("response.tasks")}</IonItemDivider>
          {tasks.length === 0 ? (
            <IonCard>
              <IonCardHeader>暂无任务</IonCardHeader>
            </IonCard>
          ) : tasks.map((task, index) => {
            return (
              <IonCard key={index} routerLink={`/response/task/${task.task_id}`}>
                <IonCardHeader>
                  <IonCardSubtitle>{task.Group.group_name}｜{task.Job.job_name}</IonCardSubtitle>
                  <IonCardTitle>{task.task_name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{task.description}</IonCardContent>
              </IonCard>
            )
          })}
          <Toast open={showSuccessToast} message={"添加任务成功！"} duration={1000} color={"success"} />
          <Toast open={showFailToast} message={"添加任务失败！"} duration={1000} color={"danger"} />
          <IonModal isOpen={showAddTask} >
            <IonContent>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton onClick={() => { setShowAddTask(false) }}>
                      <IonIcon icon={closeOutline} />
                    </IonButton>
                  </IonButtons>
                  <IonTitle>添加任务</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => { addTask() }}>确定</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonItem>
                <IonLabel position="floating">组别</IonLabel>
                <IonSelect value={group_id} interface="action-sheet" onIonChange={e => (setGroupId(e.detail.value))}>
                  {groups.map((group, index) => {
                    return (
                      <IonSelectOption key={index} value={group.group_id}>{group.group_name}</IonSelectOption>
                    )
                  })}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">岗位</IonLabel>
                <IonSelect value={job_id} interface="action-sheet" onIonChange={e => setJobId(e.detail.value)}>
                  {jobs.map((job, index) => {
                    return (
                      <IonSelectOption key={index} value={job.job_id}>{job.job_name}</IonSelectOption>
                    )
                  })}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">任务名称</IonLabel>
                <IonInput value={task_name} onIonChange={e => setTaskName(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">描述</IonLabel>
                <IonTextarea autoGrow rows={6} value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
              </IonItem>
            </IonContent>
          </IonModal>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseTasks;
