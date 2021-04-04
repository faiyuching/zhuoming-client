import React from "react";
import { PickerColumn } from "@ionic/core";
import { IonPicker } from "@ionic/react";
import { useTranslation } from "react-i18next";

/**
 * the component has three properties that are defined in this 
 * interface since we are using typescript
 */
interface _Props {
  isOpen: boolean
  onSave: Function
  onCancel: Function
  // tasks: [{
  //   task_id: string
  //   task_name: string
  // }]
  // groups: [{
  //   group_id: string
  //   group_name: string
  // }]
}

const ResponseMembersPicker: React.FC<_Props> = ({ onSave, onCancel, isOpen }) => {
  const { t } = useTranslation();
  const DayColumn = {
    name: "Day",
    options: [
      // tasks.map((task, index) => {
      //   { text: task.task_name, value: task.task_id }
      // })
      { text: "所有分组", value: "all_groups" },
      { text: "信息组", value: "info" },
      { text: "监测组", value: "monitor" },
      { text: "社会力量行动组", value: "action" },
      { text: "产品组", value: "product" },
      { text: "紧急求助平台", value: "emergency" },
    ]
  } as PickerColumn;

  const SessionTimeColumn = {
    name: "SessionTime",
    options: [
      { text: "所有岗位", value: "all_jobs" },
      { text: "信息搜集岗", value: "search" },
      { text: "信息整理岗", value: "collation" },
      { text: "信息核实岗", value: "verification" },
      { text: "信息评估岗", value: "evaluation" },
      { text: "信息跟进岗", value: "follow" },
      { text: "水文监测岗", value: "hydro_monitor" },
      { text: "气象监测岗", value: "meteoro_monitor" },
      { text: "社会力量联络员", value: "liaison" },
      { text: "地图岗", value: "map" },
      { text: "简报岗", value: "report" },
    ]
  } as PickerColumn;
  return (
    <div>
      <IonPicker
        isOpen={isOpen}
        columns={[DayColumn, SessionTimeColumn]}
        buttons={[
          {
            text: t("response.cancel"),
            role: "cancel",
            handler: value => {
              onCancel()
            }
          },
          {
            text: t("response.confirm"),
            handler: value => {
              onSave(value)
            }
          }
        ]}
      ></IonPicker>
    </div>
  );
};

export default ResponseMembersPicker;
