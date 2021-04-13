import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonImg, IonGrid, IonRow, IonCol, IonBackButton, IonButton, IonModal,
  IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router';
import axios from 'axios';

interface ParamTypes {
  topic_id: string
}

const TopicPage: React.FC = () => {
  const { t } = useTranslation();
  const [showAddResource, setShowAddResource] = useState(false)
  const { topic_id } = useParams<ParamTypes>()
  const [resource_id, setResourceId] = useState<string>()
  const [topic, setTopic] = useState({
    topic_id: "",
    topic_name: "",
    picture_url: "",
    description: "",
    Category: {
      category_name: ""
    },
  });
  const [resources, setResources] = useState([{
    resource_id: "",
    resource_link: "",
    resource_name: "",
    picture_url: "",
    Filetype: {
      filetype_name: ""
    },
    Category: {
      category_name: ""
    },
    recomment_reason: ""
  }]);
  const [resourceList, setResourceList] = useState([{
    resource_id: "",
    resource_link: "",
    resource_name: "",
    picture_url: "",
    Filetype: {
      filetype_name: ""
    },
    Category: {
      category_name: ""
    },
    recomment_reason: ""
  }]);

  useEffect(() => {
    axios.get(`/topic/${topic_id}`)
      .then(function (res) {
        setTopic(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    axios.get(`/resource/topic/${topic_id}`)
      .then(function (res) {
        setResources(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [showAddResource])

  const showAllResource = () => {
    axios.get('/resources')
      .then(function (res) {
        let resourceList: any = []
        let existResourceList: any = []
        resources.forEach((each: any) => {
          existResourceList.push(each.resource_id);
        })
        res.data.forEach((item: any) => {
          if(!existResourceList.includes(item.resource_id)){
            resourceList.push(item);
          }
        });
        setResourceList(resourceList)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const addResource = () => {
    axios.post("/resource/topic", {
      topic_id: topic_id,
      resource_id: resource_id,
      user_id: localStorage.getItem("user_id")
    })
      .then(function (res) {
        setShowAddResource(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={"/library"} text={t("back")} />
          </IonButtons>
          <IonTitle>{t("library.library")}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => { setShowAddResource(true); showAllResource() }}>添加资源</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{topic.topic_name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {topic.picture_url && <img src={topic.picture_url} alt="picture"/>}
        <IonGrid>
          <IonRow>
            <IonCol size-lg="4" size-md="6" size-sm="12">
              {resources.length === 0 ? (
                <IonCard>
                  <IonCardHeader>暂无资源</IonCardHeader>
                </IonCard>
              ) : resources.map((resource, index) => {
                return (
                  <IonCard key={index} href={resource.resource_link} target="blank">
                    {resource.picture_url && <IonImg src={resource.picture_url} />}
                    <IonCardHeader>
                      <IonCardSubtitle>{t(`library.${resource.Category.category_name}`)}｜{t(`library.${resource.Filetype.filetype_name}`)}</IonCardSubtitle>
                      <IonCardTitle>{resource.resource_name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{resource.recomment_reason}</IonCardContent>
                  </IonCard>
                )
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonModal isOpen={showAddResource} >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => { setShowAddResource(false) }}>{t("close")}</IonButton>
            </IonButtons>
            <IonTitle>添加资源</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { addResource() }}>{t("ok")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRadioGroup>
            <IonListHeader>
              <IonLabel>
                请选择资源
              </IonLabel>
            </IonListHeader>
            {resourceList.length === 0 ? (
              <IonCard>
                <IonCardHeader>暂无资源</IonCardHeader>
              </IonCard>
            ) : resourceList.map((resource, index) => {
              return (
                <IonItem key={index}>
                  <IonLabel>{resource.resource_name}</IonLabel>
                  <IonRadio value={resource.resource_id} onClick={() => { setResourceId(resource.resource_id) }} />
                </IonItem>
              )
            })}
          </IonRadioGroup>
        </IonContent>
      </IonModal>
    </IonPage>

  );
};

export default TopicPage;
