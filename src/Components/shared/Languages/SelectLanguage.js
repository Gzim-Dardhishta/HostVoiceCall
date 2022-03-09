import React from 'react';
import './selectLanguage.scss';
import SingleLanguage from './SingleLanguage';
import { dataLocalStorage } from './dataLocalStorage';

import france from '../../../assets/img/france.svg';
import spain from '../../../assets/img/spain.svg';
import german from '../../../assets/img/german.svg';
import portugal from '../../../assets/img/portugal.svg';
import nederland from '../../../assets/img/nederland.svg';
import italy from '../../../assets/img/italy.svg';
import england from '../../../assets/img/england.svg'

import { useDispatch, useSelector } from 'react-redux';
import { chooseLanguage } from '../../../store/action/languageAction';


function SelectLanguage() {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);

    const languages = [
        { value: 'en-GB', lang: 'English', flag: england },
        { value: 'de-DE', lang: 'Deutsch', flag: german },
        { value: 'fr-FR', lang: 'Français', flag: france },
        { value: 'it-IT', lang: 'Italiano', flag: italy },
        { value: 'es-ES', lang: 'Español', flag: spain },
        { value: 'pr-PR', lang: 'Português', flag: portugal},
        { value: 'nr-NR', lang: 'Nederlands', flag: nederland}
    ];

    const handleLanguageChange = (language, locale) => {
        dispatch(chooseLanguage(locale));
        dataLocalStorage.setLanguage(language);
        dataLocalStorage.setLocale(locale);
    };

    let flag = null;
    switch(dataLocalStorage.getLocale()) {
        case 'en-GB':
            flag = england;
            break;
        case 'de-DE':
            flag = german;
            break;
        case 'fr-FR':
            flag = france;
            break;
        case 'it-IT':
            flag = italy;
            break;
        case 'es-ES':
            flag = spain;
            break;
        case 'pr-PR':
            flag = portugal;
            break;
        case 'nr-NR':
            flag = nederland;
            break;
        default:
            flag = england;
    }
    
  return (
    <div className='select-language'>
        <div className='selected-language'>
            <img src={flag} alt="" />
            {dataLocalStorage.getLanguage() || 'EN'}
        </div>

        <div className="dropdown">
            {languages.map((thisLang, i) => {
                return (
                    <SingleLanguage
                    value={thisLang.value}
                    key={i}
                    handleLanguageChange={() =>
                      handleLanguageChange(thisLang.lang, thisLang.value)
                    }
                    styles={thisLang.value === language && 'selected'}
                    language={thisLang.lang}
                    flag={thisLang.flag}
                  ></SingleLanguage>
                )
            })}
        </div>
    </div>
  )
}

export default SelectLanguage