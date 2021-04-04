import React, { useEffect, useState } from 'react';
import {
  IonItem, IonLabel, IonItemGroup, IonCard, IonCardHeader,
  IonItemSliding, IonItemOptions, IonItemOption, IonButtons,
  IonButton, IonModal, IonContent, IonHeader, IonToolbar, IonTitle,
  IonIcon, IonInput, IonTextarea
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { closeOutline } from 'ionicons/icons';
import Toast from "../../components/Toast"

const ResponseGroups: React.FC = () => {
  const { t } = useTranslation();
  const [showAddGroup, setShowAddGroup] = useState(false);
  const [group_name, setGroupName] = useState("")
  const [description, setDescription] = useState("")
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  const [groups, setGroups] = useState([
    {
      group_id: "",
      group_name: "",
      description: ""
    }
  ]);
  useEffect(() => {
    axios.get(`/groups?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        setGroups(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [showSuccessToast])

  const addGroup = () => {
    if (group_name !== "") {
      axios.post("/group", {
        user_id: localStorage.getItem("user_id"),
        group_name,
        description,
        response_id: localStorage.getItem("response_id")
      })
        .then(function (res) {
          setShowAddGroup(false)
          setShowSuccessToast(true)
          setGroupName("")
          setDescription("")
        })
        .catch(function (error) {
          console.log(error);
          setShowAddGroup(false)
          setShowFailToast(true)
        });
    } else {
      alert("请填写组名")
    }
  }
  return (
    <IonItemGroup>
      {groups.length === 0 ? (
        <IonCard>
          <IonCardHeader>暂无分组</IonCardHeader>
        </IonCard>
      ) : groups.map((group, index) => {
        return (
          <IonItemSliding key={index}>
            <IonItem button lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>{group.group_name}</h2>
                <p>{group.description}</p>
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
          <IonButton onClick={() => { setShowAddGroup(true) }}>添加分组</IonButton>
        </IonButtons>
      </IonItem>
      <Toast open={showSuccessToast} message={"添加分组成功！"} duration={1000} color={"success"} />
      <Toast open={showFailToast} message={"添加失败失败！"} duration={1000} color={"danger"} />
      <IonModal isOpen={showAddGroup} >
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => { setShowAddGroup(false) }}>
                  <IonIcon icon={closeOutline} />
                </IonButton>
              </IonButtons>
              <IonTitle>添加分组</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => { addGroup() }}>确定</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonItem>
            <IonLabel position="floating">组名</IonLabel>
            <IonInput value={group_name} onIonChange={e => setGroupName(e.detail.value!)}></IonInput>
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

export default ResponseGroups;