import { useState } from "react";
import classes from "./LanguageSwitcher.module.css";
import { LANGUAGES } from "../../contants";
import { AvailableLanguages } from "../../types/languages.type";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<AvailableLanguages>("en");
  const { i18n } = useTranslation();

  const handleChangeLanguage = (shortcut: AvailableLanguages) => {
    setSelectedLanguage(shortcut);
    i18n.changeLanguage(shortcut);
  };

  return (
    <section className={classes.root}>
      {LANGUAGES.map(({ shortcut, name }) => {
        return (
          <div
            key={name}
            className={`${classes.buttonContainer} ${
              selectedLanguage === shortcut && classes.selected
            }`}
          >
            <button
              className={`${classes.languageButton} ${classes[shortcut]}`}
              aria-label={`Switch language to ${name}`}
              onClick={() => handleChangeLanguage(shortcut)}
            />
          </div>
        );
      })}
    </section>
  );
};
