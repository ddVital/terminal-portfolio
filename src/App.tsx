import { useState } from 'react'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <>
    <LanguageSwitcher />
    <li>{t('header.home')} || {currentLanguage}</li>
    </>
  )
}

export default App
