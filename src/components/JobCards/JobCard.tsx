import { useTranslation } from "react-i18next";
import { calculateDuration } from "../../utils/dateUtils";

interface JobCardProps {
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  startDate: string;
  endDate: string | null;
  techstack: string[];
}

export function JobCard({
  companyLogo,
  companyName,
  jobTitle,
  jobDescription,
  startDate,
  endDate,
  techstack
}: JobCardProps) {
  const { t, i18n } = useTranslation();

  // Format dates according to locale
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-').map(Number);
    
    const date = new Date(year, month - 1);
    
    return date.toLocaleDateString(i18n.language, { 
      year: 'numeric', 
      month: 'short'
    });
  };


  // Calculate and format duration
  const formatDuration = () => {
    const { years, months } = calculateDuration(startDate, endDate);
    
    // Handle pluralization manually to ensure it works correctly
    const yearText = years > 0 
      ? `${years} ${years === 1 ? t('duration.yearSingular') : t('duration.yearPlural')}` 
      : '';
      
    const monthText = months > 0 
      ? `${months} ${months === 1 ? t('duration.monthSingular') : t('duration.monthPlural')}` 
      : '';
      
    return [yearText, monthText].filter(Boolean).join(' ');
  };

  
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : t('duration.present');

  return (
    <div className="bg-background-secondary border border-text-muted rounded-lg p-6 mb-6 hover:shadow-lg transition-all duration-300 max-w-[500px]">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={companyLogo} 
          alt={`${companyName} logo`} 
          className="w-12 h-12 object-contain rounded-lg"
        />
        <div>
          <h3 className="font-acumin font-bold text-xl">{companyName} - {t(jobTitle)}</h3>
          <p className="text-text-secondary text-sm">
            {formattedStartDate} - {formattedEndDate} · {formatDuration()}
          </p>
        </div>
      </div>
      
      <p className="text-sm mb-4">{t(jobDescription)}</p>
      
      <div className="flex flex-wrap gap-2">
        {techstack.map((tech, index) => (
          <span 
            key={index}
            className="text-xs text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
