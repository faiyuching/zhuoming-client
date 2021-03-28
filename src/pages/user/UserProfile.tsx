import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton,
  IonItemGroup, IonItemSliding, IonLabel,
  IonItemOptions, IonItemOption, IonItem, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const UserProfile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton text="" defaultHref="/user" />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("user.user")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">个人信息</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItemGroup>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>用户名</h2>
                <p>text</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>
                编辑
          </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>昵称</h2>
                <p>text</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>密码</h2>
                <p>text</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>微信账号</h2>
                <p>text</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>石墨账号</h2>
                <p>text</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>手机号</h2>
                <p>text</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>邮箱</h2>
                <p>text</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>角色</h2>
                <p>text（现有人数）</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>性别</h2>
                <p>Multiline text that should wrap when it is too long
          to fit on one line in the item...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>所在地</h2>
                <p>国家-省份-城市</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>语言</h2>
                <p>Multiline text that should wrap when it is too long
          to fit on one line in the item...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>职业</h2>
                <p>Multiline text that should wrap when it is too long
          to fit on one line in the item...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>技能</h2>
                <p>Multiline text that should wrap when it is too long
          to fit on one line in the item...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>自我介绍</h2>
                <p>Multiline text that should wrap when it is too long
          to fit on one line in the item...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
