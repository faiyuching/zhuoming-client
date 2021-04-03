import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton, IonThumbnail,
  IonItemGroup, IonItemSliding, IonLabel, IonImg,
  IonItemOptions, IonItemOption, IonItem, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const exitAccount = () => {
  localStorage.removeItem("user_id")
  window.location.href = "/user"
}

const UserProfile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton text={t("back")} defaultHref="/user" />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("user.user")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{t("user.profile")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItemGroup>
          <IonItem lines="none" button>
            <IonThumbnail slot="start">
              <IonImg style={{ borderRadius: "50%" }} src="/assets/avatar.png" />
            </IonThumbnail>
          </IonItem>
          <IonItemSliding>
            <IonItem lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>{t("user.username")}</h2>
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
                <h2>{t("user.nickname")}</h2>
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
                <h2>{t("user.password")}</h2>
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
                <h2>{t("user.wechat")}</h2>
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
                <h2>{t("user.shimo")}</h2>
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
                <h2>{t("user.phone")}</h2>
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
                <h2>{t("user.email")}</h2>
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
                <h2>{t("user.role")}</h2>
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
                <h2>{t("user.gender")}</h2>
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
                <h2>{t("user.location")}</h2>
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
                <h2>{t("user.language")}</h2>
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
                <h2>{t("user.job")}</h2>
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
                <h2>{t("user.skill")}</h2>
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
                <h2>{t("user.introduction")}</h2>
                <p>Multiline text that should wrap when it is too long
          to fit on one line in the item...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>编辑</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonItemGroup>
        <IonButton onClick={() => { exitAccount() }}>退出账号</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
