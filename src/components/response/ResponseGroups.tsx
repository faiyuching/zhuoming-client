import React, { useEffect, useState } from 'react';
import {
  IonItem, IonLabel, IonItemGroup, IonCard, IonCardHeader,
  IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const ResponseGroups: React.FC = () => {
  const { t } = useTranslation();
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
        console.log(res.data)
        setGroups(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
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
    </IonItemGroup>
  );
};

export default ResponseGroups;