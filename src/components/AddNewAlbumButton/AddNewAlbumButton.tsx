import { Dispatch, SetStateAction } from "react";

import classes from "./AddNewAlbumButton.module.css";
import { PlusIcon } from "./components/PlusIcon/PlusIcon";
import { useTranslation } from "react-i18next";
interface AddNewAlbumButtonProps {
  onOpenForm: Dispatch<SetStateAction<boolean>>;
}

export const AddNewAlbumButton = ({ onOpenForm }: AddNewAlbumButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      className={classes.root}
      aria-label={`${t("Add new album")}`}
      onClick={() => onOpenForm(true)}
    >
      <PlusIcon />
      <span className={classes.buttonText}>{t("Add new album")}</span>
    </button>
  );
};
