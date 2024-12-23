import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`
            px-3 py-1.5 
            rounded-md 
            border border-gray-200 
            dark:border-gray-700
            transition-all 
            duration-200 
            hover:bg-gray-100 
            hover:scale-105
            dark:hover:bg-gray-800
            ${currentLanguage === code 
              ? 'bg-gray-100 dark:bg-gray-800 font-medium' 
              : 'bg-transparent'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
