import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import '../styles/App.css'

const TextComponent = () => {
    const {language} = useContext(LanguageContext);
    function translateText() {
      switch (language) {
        case 'en':
          return 'English language was chosen';
        case 'ru':
          return 'Был выбран русский язык';
        case 'de':
          return 'Deutsch wurde ausgewählt';
        case 'fr':
          return 'La langue française a été choisie';
        case 'it':
          return 'È stata scelta la lingua italiana';
        default:
          return '';
      }
    }
    const translatedText = translateText();

  return (
    <div>
        <h1 className='text-component'>{translatedText}</h1>
    </div>
  )
}

export default TextComponent