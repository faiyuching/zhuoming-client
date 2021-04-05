import React, { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea,
  IonChip, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonImg,
  IonCardHeader, IonCardSubtitle, IonSegment, IonSegmentButton, IonList,
  IonButtons, IonButton, IonSearchbar, IonItem, IonIcon, IonAvatar, IonModal
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { chatbubblesOutline, heartOutline } from 'ionicons/icons';
import axios from "axios"
import Toast from "../../components/Toast"

const Forum: React.FC = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const [showAddPost, setShowAddPost] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  const [tag, setTag] = useState("")
  const [post_content, setPostContent] = useState("")

  const [posts, setPosts] = useState([{
    Tag: {
      tag_name: ""
    },
    User: {
      nickname: "",
      headimgurl: "",
      role: "",
      job: ""
    },
    post_content: "",
    post_id: ""
  }])

  useEffect(() => {
    axios.get('/forum/post')
      .then(function (res) {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [showSuccessToast])

  const addPost = () => {
    if (post_content !== "") {
      axios.post('/forum/post', { post_content, user_id: localStorage.getItem("user_id") })
        .then(function (res) {
          console.log(res.data)
          setShowAddPost(false)
          setShowSuccessToast(true)
        })
        .catch(function (error) {
          console.log(error);
          setShowFailToast(true)
        });
    } else {
      alert("请输入帖子内容")
    }
    setShowSuccessToast(false)
    setShowFailToast(false)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("forum.forum")}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => { setShowAddPost(true) }}>{t("forum.post")}</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder={t("library.search")} value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonChip color="dark" outline>
                <IonLabel>{t("forum.question")}</IonLabel>
              </IonChip>
              <IonChip color="danger" outline>
                <IonLabel>{t("forum.disaster")}</IonLabel>
              </IonChip>
              <IonChip color="warning" outline>
                <IonLabel>{t("forum.zhuoming")}</IonLabel>
              </IonChip>
              <IonChip color="success" outline>
                <IonLabel>{t("forum.charity")}</IonLabel>
              </IonChip>
              <IonChip color="tertiary" outline>
                <IonLabel>{t("forum.development")}</IonLabel>
              </IonChip>
              <IonChip color="primary" outline>
                <IonLabel>{t("forum.response")}</IonLabel>
              </IonChip>
              <IonChip color="secondary" outline>
                <IonLabel>{t("forum.opinion")}</IonLabel>
              </IonChip>
              <IonChip color="medium" outline>
                <IonLabel>{t("forum.moments")}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
        {posts.map((post, index) => {
          return (
            <IonCard key={index} routerLink={`/forum/post/${post.post_id}`}>
              {/* <IonCardHeader>
                <IonCardSubtitle>#{}</IonCardSubtitle>
              </IonCardHeader> */}
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={post.User.headimgurl} />
                </IonAvatar>
                <IonLabel>
                  <h2>{post.User.nickname}</h2>
                  <p>
                    {post.User.role === "user" && "用户"}
                    {post.User.role === "volunteer" && "志愿者"}
                    {post.User.role === "developer" && "开发者"}
                    {post.User.role === "admin" && "管理员"}
                    {post.User.role === "super_admin" && "0号员工"}
                    {post.User.job ? ("-" + post.User.job) : ""}
                  </p>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>{post.post_content}</IonLabel>
              </IonItem>
              {/* <IonItem lines="none">
                <IonButtons slot="end">
                  <IonButton color="medium">
                    <IonIcon icon={heartOutline} />123
                  </IonButton>
                  <IonButton color="medium">
                    <IonIcon icon={chatbubblesOutline} />123
                  </IonButton>
                </IonButtons>
              </IonItem> */}
            </IonCard>
          )
        })}
      </IonContent>
      <Toast open={showSuccessToast} message={"发帖成功！"} duration={1000} color={"success"} />
      <Toast open={showFailToast} message={"发帖失败！"} duration={1000} color={"danger"} />
      <IonModal isOpen={showAddPost}>
        <IonContent fullscreen>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => { setShowAddPost(false) }}>{t("close")}</IonButton>
              </IonButtons>
              <IonTitle>发布帖子</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => { addPost() }}>{t("ok")}</IonButton>
              </IonButtons>
            </IonToolbar>
            <IonSegment disabled>
              <IonSegmentButton value="1">
                <IonLabel>{t("library.step_one")}</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="11">
                <IonLabel>{t("library.step_two")}</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonHeader>
          <IonList>
            <IonItem>
              <IonTextarea rows={20} autoGrow placeholder="请输入内容"
                onIonChange={e => setPostContent(e.detail.value!)}></IonTextarea>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Forum;
