import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Translator from './Translator'
import { LangIcon } from '../Icons'
import Modal from './Modal'
import ScrollAnimation from '../ScrollAnimation'

const ChangeLang = () => {
	const [openModal, setOpenModal] = useState(false);
  const { i18n } = useTranslation()
  // Instância do i18n

  function handleChangeLanguage(language) {
    // Trocando o idioma na chamada da função
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language // Idioma selecionado

  const ChangeLang = () => {
    // if (selectedLanguage === "pt-BR")
  }

  const handleOnClose = () => {
    setOpenModal(false);
  }

  return (
    <div className="flags-container">

      <button
        className='btn btn--primary'
        onClick={() => setOpenModal(true)}
        // onClick={() => handleChangeLanguage(selectedLanguage === 'pt-BR' ? 'en-US' : 'pt-BR')} // Troca o idioma para en-US
      >
        <label className="label">
          <Translator path="home.changeLang" />
        </label>
        {LangIcon()}
      </button>

			{openModal &&
          <Modal
            handleChangeLanguage={handleChangeLanguage}
            selectedLanguage={selectedLanguage}
            onClose={handleOnClose}
          />
			}
{/*       
      <div
        // isSelected={selectedLanguage === 'pt-BR'} // Verifica o idioma escolhido
        onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para pt-BR
      >
        <Translator path="home.changeLang" />
      </div>
      <div
        // isSelected={selectedLanguage === 'en-US'} // Verifica o idioma escolhido
        onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
      >
        <Translator path="home.changeLang" />
      </div> */}
    </div>
  )
}

export default ChangeLang;