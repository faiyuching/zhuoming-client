import React, { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea,
  IonChip, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonImg,
  IonCardHeader, IonCardSubtitle, IonSegment, IonSegmentButton, IonList,
  IonButtons, IonButton, IonSearchbar, IonItem, IonAvatar,
  IonModal, IonListHeader, IonRadioGroup, IonRadio, IonInput
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from "axios"
import Toast from "../../components/Toast"

const Forum: React.FC = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const [showAddPost, setShowAddPost] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  const [tag, setTag] = useState("")
  const [content, setContent] = useState("")
  const [value, setValue] = useState('1')
  const [input_tag, setInputTag] = useState("")
  const [tags, setTags] = useState([{
    tag: "",
    num: "",
    color: ""
  }])

  const [posts, setPosts] = useState([{
    post_id: "",
    content: "",
    tag: "",
    User: {
      nickname: "",
      headimgurl: "",
      role: "",
      job: "",
      introduction: ""
    }
  }])


  useEffect(() => {
    axios.get('/forum/post')
      .then(function (res) {
        setPosts(res.data)

        let hash = [];
        for (var i = 0; i < res.data.length; i++) {
          for (var j = i + 1; j < res.data.length; j++) {
            if (res.data[i].tag === res.data[j].tag) {
              ++i;
              j = i;
            }
          }
          res.data[i].num = 0;
          res.data[i].color = "";
          hash.push(res.data[i]);
        }
        hash.forEach(item => {
          res.data.forEach((each: any) => {
            if (item.tag === each.tag) {
              item.num++
            }
            if (item.num >= 8) {
              item.color = "danger"
            } else if (item.num >= 7) {
              item.color = "warning"
            } else if (item.num >= 6) {
              item.color = "dark"
            } else if (item.num >= 5) {
              item.color = "success"
            } else if (item.num >= 4) {
              item.color = "tertiary"
            } else if (item.num >= 3) {
              item.color = "secondary"
            } else if (item.num >= 2) {
              item.color = "primary"
            } else if (item.num >= 1) {
              item.color = "medium"
            }
          })
        });
        setTags(hash)
        console.log(hash)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [showSuccessToast])

  const fliterPost = (tag: string) => {
    axios.get(`/forum/post?tag=${tag}`)
      .then(function (res) {
        setPosts(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const addPost = () => {
    if (content !== "") {
      axios.post('/forum/post', {
        content,
        user_id: localStorage.getItem("user_id"),
        tag: tag || input_tag
      })
        .then(function (res) {
          console.log(res.data)
          setShowAddPost(false)
          setShowSuccessToast(true)
          setValue("1")
          setContent("")
          setTag("")
          setInputTag("")
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
              {tags.length !== 0 && tags.map((tag, index) => {
                return (
                  <IonChip key={index} color={tag.color} outline onClick={() => { fliterPost(tag.tag) }}>
                    <IonLabel>#{(tag.tag === "unlabeled" ? t("forum.unlabeled") : tag.tag) + " " + tag.num}</IonLabel>
                  </IonChip>
                )
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
        {posts.length === 0 ? (
          <IonCard>
            <IonCardHeader>暂无帖子</IonCardHeader>
          </IonCard>
        ) : posts.map((post, index) => {
          return (
            <IonCard key={index} routerLink={`/forum/post/${post.post_id}`}>
              <IonCardHeader>
                <IonCardSubtitle>{post.tag === "unlabeled" ? t("forum.unlabeled") : post.tag}</IonCardSubtitle>
              </IonCardHeader>
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
                    {post.User.job && ("-" + post.User.job)}
                    {post.User.introduction && ("-" + post.User.introduction)}
                  </p>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>{post.content}</IonLabel>
              </IonItem>
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
              <IonTitle>发帖</IonTitle>
              <IonButtons slot="end">
                {value !== "1" && <IonButton onClick={() => { setValue(value.slice(1)) }}>{t("library.previous")}</IonButton>}
                {value === "11" ?
                  <IonButton onClick={() => { addPost() }}>{(tag || input_tag) ? t("library.complete") : "跳过"}</IonButton> :
                  <IonButton onClick={() => { setValue(value + "1") }}>{t("library.next_step")}</IonButton>
                }
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
          {value === "1" &&
            <IonItem>
              <IonTextarea rows={20} autoGrow placeholder="请输入内容"
                onIonChange={e => setContent(e.detail.value!)}></IonTextarea>
            </IonItem>
          }
          {value === "11" &&
            <IonList>
              <IonRadioGroup value={tag} onIonChange={e => setTag(e.detail.value)}>
                <IonListHeader>
                  <IonLabel>请选择标签</IonLabel>
                </IonListHeader>
                {tags.length === 0 ? (
                  <IonCard>
                    <IonCardHeader>暂无标签</IonCardHeader>
                  </IonCard>
                ) : tags.map((tag, index) => {
                  return (
                    <IonItem key={index}>
                      <IonLabel>#{tag.tag === "unlabeled" ? t("forum.unlabeled") : tag.tag}</IonLabel>
                      <IonRadio value={tag.tag} />
                    </IonItem>
                  )
                })}
                <IonItem>
                  <IonLabel>或输入标签：</IonLabel>
                  <IonInput value={input_tag} onIonChange={(e) => { setInputTag(e.detail.value!); setTag("") }}>#</IonInput>
                </IonItem>
              </IonRadioGroup>
            </IonList>
          }
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Forum;
