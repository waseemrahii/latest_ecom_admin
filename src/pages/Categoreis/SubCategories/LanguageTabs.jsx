// LanguageTabs.js
import React from 'react';

const LanguageTabs = ({ activeTab, handleTabClick }) => {
  const languages = ['en', 'sa', 'bd', 'in'];
  const languageNames = {
    en: 'English',
    sa: 'Arabic',
    bd: 'Bangla',
    in: 'Hindi'
  };

  return (
    <ul className="nav nav-tabs w-fit-content mb-4">
      {languages.map((lang) => (
        <li className="nav-item" key={lang}>
          <span
            className={`nav-link form-system-language-tab cursor-pointer ${activeTab === lang ? 'active' : ''}`}
            onClick={() => handleTabClick(lang)}
          >
            {languageNames[lang]} ({lang.toUpperCase()})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default LanguageTabs;
