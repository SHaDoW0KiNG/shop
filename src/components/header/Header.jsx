import "./Header.css"
import {CiLocationOn} from "react-icons/ci"
import {BiWorld} from "react-icons/bi"
import { useTranslation } from 'react-i18next';
function Header () {
    const { t,i18n } = useTranslation();
    return (
        <>
            <div className="header">
                <CiLocationOn className="location"/>
                <select name="" id="" className="header_select">
                    <option value="">Ташкент</option>
                    <option value="">Ташкенская область</option>
                    <option value="">Бухарская область</option>
                    <option value="">Андижанская область</option>
                    <option value="">Ферганская область</option>
                    <option value="">Наманганская область</option>
                    <option value="">Самаркандская область</option>
                    <option value="">Республика Каракалпакстан</option>
                    <option value="">Кашкадарьинская область</option>
                    </select>
                   
                    <button className="header_button"> {t("header.part1")}</button>
                    <button className="header_button hbg">{t("header.part2")}</button>
                    <button className="header_button">{t("header.part3")}</button>
                    <button className="header_button">{t("header.part4")}</button>
                    <button className="header_button_contact">{t("header.part5")} : <span>+99871209 99 44</span></button>
                    <BiWorld className="world"/>
                    <select name="" id="" className="header_select_right">
                        
                        <option onClick={() => i18n.changeLanguage("ru")} value="">
                        ру
                        </option>
                        <option onClick={() => i18n.changeLanguage("uz")} value="">
                        o'z
                        </option>
                        <option value="">уз</option>
                    </select>
            </div>
        </>
    )
}
export default Header