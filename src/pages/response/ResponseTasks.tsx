import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonPage, IonTextarea,
  IonTitle, IonToolbar, IonSplitPane, IonButton, IonButtons, IonModal, IonSelect,
  IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonInput,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonItemDivider,
  IonSelectOption, IonToggle
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Toast from "../../components/Toast"

const ResponseTasks: React.FC = () => {
  const { t } = useTranslation();
  const [showAddTask, setShowAddTask] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);

  const [task_name, setTaskName] = useState<string>()
  const [need_people, setNeedPeople] = useState<string>()
  const [group_id, setGroupId] = useState<string>()
  const [job_id, setJobId] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [isEnd, setIsEnd] = useState<string>("false")
  const [need_shimo, setNeedShimo] = useState(false)

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
    axios.get(`/tasks?response_id=${localStorage.getItem("response_id")}&end=${isEnd}`)
      .then(function (res) {
        setTasks(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [showSuccessToast, isEnd])

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
        job_id,
        need_people,
        need_shimo
      })
        .then(function (res) {
          setShowAddTask(false)
          setShowSuccessToast(true)
          setTaskName("")
          setGroupId("")
          setJobId("")
          setDescription("")
          setNeedPeople("")
          setNeedShimo(false)
        })
        .catch(function (error) {
          console.log(error);
          setShowAddTask(false)
          setShowFailToast(true)
        });
    } else {
      alert("?????????????????????")
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
              <IonSegment value={isEnd} onIonChange={e => setIsEnd(e.detail.value!)}>
                <IonSegmentButton value="false">
                  <IonLabel>{t("response.unfinished")}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="true">
                  <IonLabel>{t("response.finished")}</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {/* <IonItemDivider>{tasks.length}</IonItemDivider> */}
          {tasks.length === 0 ? (
            <IonCard>
              <IonCardHeader>????????????</IonCardHeader>
            </IonCard>
          ) : tasks.map((task, index) => {
            return (
              <IonCard key={index} routerLink={`/response/task/${task.task_id}`}>
                <IonCardHeader>
                  <IonCardSubtitle>{task.Group.group_name}???{task.Job.job_name}</IonCardSubtitle>
                  <IonCardTitle>{task.task_name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{task.description}</IonCardContent>
              </IonCard>
            )
          })}
          <Toast open={showSuccessToast} message={"?????????????????????"} duration={1000} color={"success"} />
          <Toast open={showFailToast} message={"?????????????????????"} duration={1000} color={"danger"} />
          <IonModal isOpen={showAddTask} >
            <IonContent>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton onClick={() => { setShowAddTask(false) }}>{t("close")}</IonButton>
                  </IonButtons>
                  <IonTitle>????????????</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => { addTask() }}>{t("ok")}</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonItem>
                <IonLabel>??????????????????????????????</IonLabel>
                <IonToggle checked={need_shimo} onIonChange={e => setNeedShimo(e.detail.checked)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">??????<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
                <IonSelect value={group_id} interface="action-sheet" onIonChange={e => (setGroupId(e.detail.value))}>
                  {groups.map((group, index) => {
                    return (
                      <IonSelectOption key={index} value={group.group_id}>{group.group_name}</IonSelectOption>
                    )
                  })}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">??????<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
                <IonSelect value={job_id} interface="action-sheet" onIonChange={e => setJobId(e.detail.value)}>
                  {jobs.map((job, index) => {
                    return (
                      <IonSelectOption key={index} value={job.job_id}>{job.job_name}</IonSelectOption>
                    )
                  })}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">????????????<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
                <IonInput value={task_name} onIonChange={e => setTaskName(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">????????????</IonLabel>
                <IonInput value={need_people} onIonChange={e => setNeedPeople(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">??????</IonLabel>
                <IonTextarea autoGrow value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
              </IonItem>
            </IonContent>
          </IonModal>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseTasks;
