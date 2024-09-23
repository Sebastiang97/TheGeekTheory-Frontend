import { LANGUAGES } from '@/constants/Language';
import { Languages } from 'lucide-react';
import { useTranslation } from "react-i18next"
import "./language.css"

export const Language = () => {
  const { i18n } = useTranslation(["translation"])

    const changeLanguage = ():void =>{
      console.log(i18n.language)

      i18n.language === LANGUAGES.ENGLISH.code
        ? i18n.changeLanguage(LANGUAGES.SPANISH.code)
        : i18n.changeLanguage(LANGUAGES.ENGLISH.code)
    }

  return (
    <Languages className='nav-icon' onClick={changeLanguage}/>
  )
}
