import React from "react";
import { useTranslation } from "react-i18next";
import s from "./index.module.scss";
import { PiArrowRightThin } from "react-icons/pi";
import { smoothScroll } from "../../utils/smoothScroll";

const Contact_btn = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    smoothScroll("contact");
  };

  return (
    <div className={s.btn} onClick={handleClick}>
      <span>{t('contact.button')}</span> <PiArrowRightThin />
    </div>
  );
};

export default Contact_btn;
