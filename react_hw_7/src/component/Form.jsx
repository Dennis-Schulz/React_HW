import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import TextComponent from './TextComponent'
import '../styles/App.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import RuFlag from '../assets/img/flag_rf_enl.jpg'
import DeFlag from '../assets/img/flag_germanija_enl.jpg'
import FrFlag from '../assets/img/flag_frantsija_new.jpg'
import ItFlag from '../assets/img/flag_italija_enl.jpg'
import EnFlag from '../assets/img/flag_england.jpg'


const Form = () => {
    const languages = useContext(LanguageContext);

    function changeFlag() {
      switch (languages.language) {
        case 'en':
          return EnFlag;
        case 'ru':
          return RuFlag;
        case 'de':
          return DeFlag;
        case 'fr':
          return FrFlag;
        case 'it':
          return ItFlag;
        default:
          return EnFlag;
      }
    }
    const flag = changeFlag();

  return (
    <div className='form' style={{backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', transition: 'all 0.2s ease'}}>
        <TextComponent />
        <LanguageSwitcher />
    </div>
  )
}

export default Form