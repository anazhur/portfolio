import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './index.module.scss';
import Contact_btn from '../Contact_btn';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className={s.intro}>
      <span>👋 {t('intro.greeting')}</span>
      <h1>{t('intro.title')}</h1>
      <p>{t('intro.description')}</p>
      <Contact_btn />
    </section>
  );
};

export default Intro;
