import React, { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonInput,
  IonCardTitle, IonCardContent, IonImg, IonItem, IonGrid, IonRow,
  IonCol, IonSearchbar, IonModal, IonPopover, IonList, useIonPicker,
  IonLabel, IonTextarea
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router';
import queryString from 'querystring';
import { chevronDownOutline } from 'ionicons/icons';
import Toast from "../../components/Toast"
import axios from 'axios';

const Library: React.FC = () => {
  const { t } = useTranslation();
  const sort = queryString.parse(useLocation().search.split('?')[1]).sort
  const [searchText, setSearchText] = useState('');
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [showAddResource, setShowAddResource] = useState(false);
  const [showAddTopic, setShowAddTopic] = useState(false);

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);

  const [topic_name, setTopicName] = useState<string>();
  const [picture_url, setPictureUrl] = useState<string>();
  const [description, setDescription] = useState<string>();

  const [present] = useIonPicker();
  const [fileTypeText, setFileTypeText] = useState<string>();
  const [categoryText, setCategoryText] = useState<string>();
  const [fileTypeValue, setFileTypeValue] = useState<string>();
  const [categoryValue, setCategoryValue] = useState<string>();
  const [resource_link, setResourceLink] = useState<string>();
  const [resource_name, setResourceName] = useState<string>();
  const [recomment_reason, setRecommentReason] = useState<string>();
  const [resources, setResources] = useState([{
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
  const [topics, setTopics] = useState([{
    topic_id: "",
    topic_name: "",
    picture_url: "",
    description: "",
    Category: {
      category_name: ""
    },
  }]);

  const addTopic = () => {
    if (topic_name !== "" && categoryValue !== "") {
      axios.post("/topic", {
        user_id: localStorage.getItem("user_id"),
        topic_name,
        picture_url,
        description,
        categoryValue
      })
        .then(function (res) {
          console.log(res.data)
          setShowAddTopic(false)
          setShowSuccessToast(true)
          setCategoryText("")
          setCategoryValue("")
          setTopicName("")
          setPictureUrl("")
          setDescription("")
        })
        .catch(function (error) {
          console.log(error);
          setShowAddTopic(false)
          setShowFailToast(true)
          setCategoryText("")
          setCategoryValue("")
          setTopicName("")
          setPictureUrl("")
          setDescription("")
        });
    } else {
      alert("????????????????????????")
    }
    setShowSuccessToast(false)
    setShowFailToast(false)
  }

  const addResource = () => {
    if (resource_link !== "" && resource_name !== "") {
      axios.post("/resource", {
        user_id: localStorage.getItem("user_id"),
        resource_link,
        resource_name,
        picture_url,
        fileTypeValue,
        categoryValue,
        recomment_reason
      })
        .then(function (res) {
          setShowAddResource(false)
          setShowSuccessToast(true)
          setFileTypeText("")
          setCategoryText("")
          setFileTypeValue("")
          setCategoryValue("")
          setResourceLink("")
          setResourceName("")
          setRecommentReason("")
          setPictureUrl("")
        })
        .catch(function (error) {
          console.log(error);
          setShowAddResource(false)
          setShowFailToast(true)
          setFileTypeText("")
          setCategoryText("")
          setFileTypeValue("")
          setCategoryValue("")
          setResourceLink("")
          setResourceName("")
          setRecommentReason("")
          setPictureUrl("")
        });
    } else {
      alert("????????????????????????")
    }
    setShowSuccessToast(false)
    setShowFailToast(false)
  }

  useEffect(() => {
    if (fileTypeValue || categoryValue) {
      if (fileTypeValue === "topic") {
        axios.get(`/topics?category_name=${categoryValue}`)
          .then(function (res) {
            setTopics(res.data)
            setResources([])
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        if (fileTypeValue === "undefined") {
          axios.get(`/topics?category_name=${categoryValue}`)
            .then(function (res) {
              setTopics(res.data)
            })
            .catch(function (error) {
              console.log(error);
            });
          axios.get(`/resources?filetype_name=${fileTypeValue}&category_name=${categoryValue}`)
            .then(function (res) {
              setResources(res.data)
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          axios.get(`/resources?filetype_name=${fileTypeValue}&category_name=${categoryValue}`)
            .then(function (res) {
              setResources(res.data)
              setTopics([])
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    } else if (!fileTypeValue && !categoryValue) {
      axios.get(`/resources?filetype_name=${fileTypeValue}&category_name=${categoryValue}`)
        .then(function (res) {
          setResources(res.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      axios.get('/topics')
        .then(function (res) {
          const lastTopic = []
          lastTopic.push(res.data.pop())
          setTopics(lastTopic)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [showSuccessToast, fileTypeValue, categoryValue])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{sort ? t(`library.${sort}`) : t("library.library")}</IonTitle>
          <IonButtons slot="end">
            {localStorage.getItem("user_id") &&
              <IonButton
                onClick={
                  (e: any) => {
                    e.persist();
                    setShowPopover({ showPopover: true, event: e })
                  }}
              >
                <IonIcon icon={addOutline} />
              </IonButton>
            }
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder={t("library.search")} value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
          <IonItem
            onClick={() =>
              present(
                [
                  {
                    name: 'category',
                    options: [
                      { text: t("library.all_disaster_types"), value: 'undefined' },
                      { text: t("library.meteoro_hydro"), value: 'meteoro_hydro' },
                      { text: t("library.geological"), value: 'geological' },
                      { text: t("library.marine"), value: 'marine' },
                      { text: t("library.biological"), value: 'biological' },
                      { text: t("library.ecological"), value: 'ecological' },
                      { text: t("library.others"), value: 'others' },
                    ],
                  },
                  {
                    name: 'fileType',
                    options: [
                      { text: t("library.all_resource_types"), value: 'undefined' },
                      { text: t("library.topic"), value: 'topic' },
                      { text: t("library.brief_report"), value: 'brief_report' },
                      { text: t("library.article"), value: 'article' },
                      { text: t("library.picture"), value: 'picture' },
                      { text: t("library.book"), value: 'book' },
                      { text: t("library.video"), value: 'video' },
                      { text: t("library.audio"), value: 'audio' },
                    ],
                  }
                ],
                [
                  {
                    text: t("response.cancel"),
                    role: "cancel",
                  },
                  {
                    text: t("response.confirm"),
                    handler: (selected) => {
                      setFileTypeText(selected.fileType.text)
                      setCategoryText(selected.category.text)
                      setFileTypeValue(selected.fileType.value)
                      setCategoryValue(selected.category.value)
                    },
                  }
                ]
              )
            }
          >
            {(categoryText ? categoryText : "?????????????????????") + " - " + (fileTypeText ? fileTypeText : "?????????????????????")}
            <IonButtons slot="end">
              <IonButton color="medium">
                <IonIcon icon={chevronDownOutline} />
              </IonButton>
            </IonButtons>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonPopover
          cssClass='my-custom-class'
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
        >
          <IonList>
            <IonItem button onClick={() => { setShowAddResource(true); setShowPopover({ showPopover: false, event: undefined }) }}>{t("library.recommend")}</IonItem>
            <IonItem button lines="none" onClick={() => { setShowAddTopic(true); setShowPopover({ showPopover: false, event: undefined }) }}>{t("library.create_topic")}</IonItem>
          </IonList>
        </IonPopover>

        {topics.map((topic, index) => {
          return (
            <IonCard key={index} routerLink={`/library/${topic.topic_id}`}>
              {topic.picture_url && <IonImg src={topic.picture_url} />}
              <IonCardHeader>
                <IonCardSubtitle>{t(`library.${topic.Category.category_name}`)}???{t("library.topic")}</IonCardSubtitle>
                <IonCardTitle>{topic.topic_name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{topic.description}</IonCardContent>
            </IonCard>
          )
        })}
        {resources.map((resource, index) => {
          return (
            <IonCard key={index} href={resource.resource_link} target="blank">
              {resource.picture_url && <IonImg src={resource.picture_url} />}
              <IonCardHeader>
                <IonCardSubtitle>{t(`library.${resource.Category.category_name}`)}???{t(`library.${resource.Filetype.filetype_name}`)}</IonCardSubtitle>
                <IonCardTitle>{resource.resource_name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{resource.recomment_reason}</IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
      <Toast open={showSuccessToast} message={"???????????????"} duration={1000} color={"success"} />
      <Toast open={showFailToast} message={"???????????????"} duration={1000} color={"danger"} />
      <IonModal isOpen={showAddResource} >
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => { setShowAddResource(false) }}>{t("close")}</IonButton>
              </IonButtons>
              <IonTitle>{t("library.library")}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => { addResource() }}>{t("ok")}</IonButton>
              </IonButtons>
            </IonToolbar>
            <IonToolbar>
              <IonTitle size="large">{t("library.recommend")}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
            <IonItem
              onClick={() =>
                present(
                  [
                    {
                      name: 'category',
                      options: [
                        { text: t("library.meteoro_hydro"), value: 'meteoro_hydro' },
                        { text: t("library.geological"), value: 'geological' },
                        { text: t("library.marine"), value: 'marine' },
                        { text: t("library.biological"), value: 'biological' },
                        { text: t("library.ecological"), value: 'ecological' },
                        { text: t("library.others"), value: 'others' },
                      ],
                    },
                    {
                      name: 'fileType',
                      options: [
                        { text: t("library.brief_report"), value: 'brief_report' },
                        { text: t("library.article"), value: 'article' },
                        { text: t("library.picture"), value: 'picture' },
                        { text: t("library.book"), value: 'book' },
                        { text: t("library.video"), value: 'video' },
                        { text: t("library.audio"), value: 'audio' },
                      ],
                    }
                  ],
                  [
                    {
                      text: t("response.cancel"),
                      role: "cancel",
                    },
                    {
                      text: t("response.confirm"),
                      handler: (selected) => {
                        setFileTypeText(selected.fileType.text)
                        setCategoryText(selected.category.text)
                        setFileTypeValue(selected.fileType.value)
                        setCategoryValue(selected.category.value)
                      },
                    }
                  ]
                )
              }
            >
              {(categoryText ? categoryText : "?????????????????????") + " - " + (fileTypeText ? fileTypeText : "?????????????????????")}
              <IonButtons slot="end">
                <IonButton color="medium">
                  <IonIcon icon={chevronDownOutline} />
                </IonButton>
              </IonButtons>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">????????????<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonInput value={resource_name} onIonChange={e => setResourceName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">????????????<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonInput value={resource_link} onIonChange={e => setResourceLink(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">????????????</IonLabel>
              <IonInput value={picture_url} onIonChange={e => setPictureUrl(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">????????????</IonLabel>
              <IonTextarea rows={6} autoGrow value={recomment_reason} onIonChange={e => setRecommentReason(e.detail.value!)}></IonTextarea>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
      <IonModal isOpen={showAddTopic} >
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => { setShowAddTopic(false) }}>{t("close")}</IonButton>
              </IonButtons>
              <IonTitle>{t("library.library")}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => { addTopic() }}>{t("ok")}</IonButton>
              </IonButtons>
            </IonToolbar>
            <IonToolbar>
              <IonTitle size="large">{t("library.create_topic")}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
            <IonItem
              onClick={() =>
                present(
                  [
                    {
                      name: 'category',
                      options: [
                        { text: t("library.meteoro_hydro"), value: 'meteoro_hydro' },
                        { text: t("library.geological"), value: 'geological' },
                        { text: t("library.marine"), value: 'marine' },
                        { text: t("library.biological"), value: 'biological' },
                        { text: t("library.ecological"), value: 'ecological' },
                        { text: t("library.others"), value: 'others' },
                      ],
                    }
                  ],
                  [
                    {
                      text: t("response.cancel"),
                      role: "cancel",
                    },
                    {
                      text: t("response.confirm"),
                      handler: (selected) => {
                        setCategoryText(selected.category.text)
                        setCategoryValue(selected.category.value)
                      },
                    }
                  ]
                )
              }
            >
              {(categoryText ? categoryText : "?????????????????????")}
              <IonButtons slot="end">
                <IonButton color="medium">
                  <IonIcon icon={chevronDownOutline} />
                </IonButton>
              </IonButtons>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">????????????<sup style={{ color: "#eb445a" }}>*</sup></IonLabel>
              <IonInput value={topic_name} onIonChange={e => setTopicName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">????????????</IonLabel>
              <IonInput value={picture_url} onIonChange={e => setPictureUrl(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">??????</IonLabel>
              <IonTextarea rows={6} autoGrow value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Library;
