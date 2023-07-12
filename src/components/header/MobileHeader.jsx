import "./MobileHeader.css"
import {CiLocationOn} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"
function MobileHeader () {
    return (
        <>
        <div className="mobile_header">
        <CiLocationOn className="mobile_location"/>
                <select name="" id="" className="mobile_header_select">
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
                    <img src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg" alt="" className="mobile_header_img" />
                    <BsTelephone className="phone"/>
                    <button className="mobile_header_button_contact">+99871209 99 44</button>
        </div>
        </>
    )
}
export default MobileHeader