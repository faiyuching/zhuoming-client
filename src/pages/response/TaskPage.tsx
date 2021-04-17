import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonSegment, IonButtons, IonButton, IonLabel, IonBackButton,
  IonSegmentButton, IonAlert, IonPopover, IonItem
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import TaskBaseInfo from '../../components/response/TaskBaseInfo';
import TaskMembers from '../../components/response/TaskMembers';
import TaskSubmit from '../../components/response/TaskSubmit';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router';
import axios from "axios";
import Toast from "../../components/Toast"
import ApplyList from "../../components/response/ApplyList"

interface ParamTypes {
  task_id: string
}

const TaskPage: React.FC = () => {
  const [value, setValue] = useState('base_info')
  const { t } = useTranslation();
  const [showApplyList, setShowApplyList] = useState(false);
  const { task_id } = useParams<ParamTypes>()
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  // const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false)
  const [task, setTask] = useState({
    response_id: "",
    group_id: "",
    job_id: "",
    need_shimo: "",
    end_time: ""
  })
  const [need_shimo, setNeedShimo] = useState(false)
  const [shimoAlert, setShimoAlert] = useState(false)

  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });

  useEffect(() => {
    axios.get(`/task/${task_id}`)
      .then(function (res) {
        setTask(res.data)
        setNeedShimo(res.data.need_shimo)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const receiveTask = (description:string) => {
    axios.post("/apply", {
      response_id: task.response_id,
      group_id: task.group_id,
      job_id: task.job_id,
      task_id,
      need_shimo: task.need_shimo,
      description,
      user_id: localStorage.getItem("user_id")
    })
      .then(function (res) {
        setShowSuccessToast(true)
        setValue("task_recipient")
      })
      .catch(function (error) {
        console.log(error);
        setShowFailToast(true)
      });
  }
  const ShimoJudge = () => {
    if (need_shimo && localStorage.getItem("shimo") !== "undefined") {
      setShowAlert(true)
    } else if (!need_shimo) {
      setShowAlert(true)
    } else {
      setShimoAlert(true)
    }
  }
  const onEndTask = () => {
    axios.put(`/task/${task_id}`, { end_time: Date.now() })
      .then(function (res) {
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text={t("back")} defaultHref="/response/tasks" />
            </IonButtons>
            <IonTitle>{localStorage.getItem("response_name")}</IonTitle>
            {!task.end_time &&
              <IonButtons slot="end">
                <IonButton onClick={
                  (e: any) => {
                    e.persist();
                    setShowPopover({ showPopover: true, event: e })
                  }}
                >
                  更多
              </IonButton>
                <IonPopover
                  cssClass='my-custom-class'
                  event={popoverState.event}
                  isOpen={popoverState.showPopover}
                  onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                >
                  <IonItem button onClick={() => { setShowApplyList(true) }}>{t("response.invite")}</IonItem>
                  <IonItem button lines="none" onClick={() => { onEndTask() }}>结束任务</IonItem>
                </IonPopover>
              </IonButtons>
            }
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.task_detail")}</IonTitle>
            {!task.end_time &&
              <IonButtons slot="end">
                <IonButton onClick={() => { ShimoJudge() }}>{t("response.receive")}</IonButton>
              </IonButtons>
            }
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Toast open={showSuccessToast} message={"领取任务成功！"} duration={1000} color={"success"} />
          <Toast open={showFailToast} message={"领取任务失败！"} duration={1000} color={"danger"} />
          <ApplyList openApplyList={showApplyList} />
          <IonAlert
            isOpen={shimoAlert}
            onDidDismiss={() => setShimoAlert(false)}
            header={'需要石墨账号'}
            buttons={[
              {
                text: t("cancel"),
                role: 'cancel',
                cssClass: 'secondary',
                handler: blah => {
                  console.log('Confirm Cancel: blah');
                }
              },
              {
                text: '去完善个人资料',
                handler: () => {
                  window.location.href = "/user/profile"
                }
              }
            ]}
          />
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            // header={'输入申请理由'}
            inputs={[
              {
                name: 'description',
                type: 'text',
                // value: description,
                placeholder: '申请理由'
              }
            ]}
            buttons={[
              {
                text: 'Cancel',
                role: 'cancel',
              },
              {
                text: 'Ok',
                handler: (data) => {
                  // setDescription(data.description);
                  receiveTask(data.description)
                }
              }
            ]}
          />
          <IonSegment value={value} onIonChange={e => setValue(e.detail.value!)}>
            <IonSegmentButton value="base_info">
              <IonLabel>{t("response.base_info")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="task_recipient">
              <IonLabel>{t("response.task_recipient")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="task_submit">
              <IonLabel>{t("response.task_submit")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {value === "base_info" && <TaskBaseInfo />}
          {value === "task_recipient" && <TaskMembers />}
          {value === "task_submit" && <TaskSubmit />}
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default TaskPage;
