
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import '../styles/App.css'

const LanguageSwitcher = () => {

    const {toggleLanguage} = useContext(LanguageContext);
  return (
    <div>
 <button className='language-switcher' onClick={toggleLanguage}>Switch Language</button>
    </div>
  )
}

export default LanguageSwitcher