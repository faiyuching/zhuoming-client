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
}

const LibraryPicker: React.FC<_Props> = ({ onSave, onCancel, isOpen }) => {
  const { t } = useTranslation();
  const DayColumn = {
    name: "Day",
    options: [
      { text: t("library.meteoro_hydro"), value: "meteoro_hydro" },
      { text: t("library.geological"), value: "geological" },
      { text: t("library.marine"), value: "marine" },
      { text: t("library.biological"), value: "biological" },
      { text: t("library.ecological"), value: "ecological" },
      { text: t("library.others"), value: "others" },
    ]
  } as PickerColumn;

  const SessionTimeColumn = {
    name: "SessionTime",
    options: [
      { text: t("library.topic"), value: "topic" },
      { text: t("library.video"), value: "video" },
      { text: t("library.audio"), value: "audio" },
      { text: t("library.article"), value: "article" },
      { text: t("library.book"), value: "book" },
      { text: t("library.brief_report"), value: "brief_report" },
      { text: t("library.doc"), value: "doc" },
      { text: t("library.pdf"), value: "pdf" },
      { text: t("library.excel"), value: "excel" },
      { text: t("library.ppt"), value: "ppt" },
    ]
  } as PickerColumn;
  return (
    <div>
      <IonPicker
        isOpen={isOpen}
        columns={[DayColumn, SessionTimeColumn]}
        buttons={[
          {
            text: t("library.cancel"),
            role: "cancel",
            handler: value => {
              onCancel()
            }
          },
          {
            text: t("library.confirm"),
            handler: value => {
              onSave(value)
            }
          }
        ]}
      ></IonPicker>
    </div>
  );
};

export default LibraryPicker;
