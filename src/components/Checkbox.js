import React, { useState } from 'react';
import Translator from './i18n/Translator';

const Checkbox = ({ label, selectedLang, setSelectedLang }) => {
	const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setSelectedLang(selectedLang === 'en' ? 'pt' : 'en');
  };

  return (
    <label className={`checkbox ${selectedLang === label ? 'checked' : undefined}`}>
			<Translator path={`home.${label}`} />
      {selectedLang === label[2]}
      <input type="checkbox" checked={selectedLang == label} onChange={handleCheckboxChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;