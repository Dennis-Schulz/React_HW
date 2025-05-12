import { createContext, useState} from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const language=['en', 'ru','de','fr','it'];
    const [languageIndex, setLanguageIndex] = useState(0);
    const toggleLanguage = () => {
       setLanguageIndex((prevIndex) => (prevIndex + 1) % language.length);
        }
    

  return (
    <LanguageContext.Provider value={{language : language[languageIndex], toggleLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider