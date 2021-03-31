import React, { useEffect, useState } from 'react';
import {
  IonItem, IonLabel, IonItemGroup, IonItemSliding, IonItemOptions,
  IonItemOption, IonCard, IonCardHeader
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const ResponseJobs: React.FC = () => {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([
    {
      job_id: "",
      job_name: "",
      description: ""
    }
  ]);
  useEffect(() => {
    axios.get(`/jobs?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        console.log(res.data)
        setJobs(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <IonItemGroup>
      {jobs.length === 0 ? (
        <IonCard>
          <IonCardHeader>暂无岗位</IonCardHeader>
        </IonCard>
      ) : jobs.map((job, index) => {
        return (
          <IonItemSliding key={index}>
            <IonItem button lines="full">
              <IonLabel className="ion-text-wrap">
                <h2>{job.job_name}</h2>
                <p>{job.description}</p>
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

export default ResponseJobs;