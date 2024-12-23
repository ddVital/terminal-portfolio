import { useState } from 'react'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <main className="bg-background-primary text-text-primary min-h-screen">
      <div className=''>
      <LanguageSwitcher />
      <li>{t('header.home')} || {currentLanguage}</li>
      <ThemeSwitcher />
      <h1 className="text-4xl font-bold mt-8">Welcome to my portfolio</h1>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          This text will change color based on the theme
        </p>
      </div>
    </main>
  )
}

export default App
