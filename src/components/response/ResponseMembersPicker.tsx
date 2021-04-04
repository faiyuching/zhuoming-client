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
  jobs: [{
    text: string
    value: string
  }]
  groups: [{
    text: string
    value: string
  }]
}

const ResponseMembersPicker: React.FC<_Props> = ({ onSave, onCancel, isOpen,groups,jobs }) => {
  const { t } = useTranslation();
  const DayColumn = {
    name: "Day",
    options: groups
  } as PickerColumn;

  const SessionTimeColumn = {
    name: "SessionTime",
    options: jobs
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
      />
    </div>
  );
};

export default ResponseMembersPicker;
