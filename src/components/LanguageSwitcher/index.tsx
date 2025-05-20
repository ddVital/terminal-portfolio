import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language switcher">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={currentLanguage === code}
          className={`
            p-1
            text-sm
            rounded-md
            transition-all 
            duration-200 
            ${currentLanguage === code 
              ? 'text-text-primary font-medium' 
              : ' text-text-secondary'
            }
          `}
          data-tooltip={t('general.changeLanguage')}
          data-tooltip-position="bottom"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
