import { BiMenu } from "react-icons/bi";
import "./Catalog.css"
import { useTranslation } from 'react-i18next'
function Catalog () {
    const { t } = useTranslation();
    return (
        <>
        <div className="catalog">
            <button className="catalog_button cbc" style={{backgroundColor:"gold",marginLeft:10,borderRadius:10,height:45}}><BiMenu style={{marginRight:5,fontSize:20}}/> {t("catalog.part1")} </button>
            <button className="catalog_button">{t("catalog.part2")}</button>
            <button className="catalog_button cbk">{t("catalog.part3")}</button>
            <button className="catalog_button">{t("catalog.part4")}</button>
            <button className="catalog_button">{t("catalog.part5")}</button>
            <button className="catalog_button">{t("catalog.part6")}</button>
            <button className="catalog_button">{t("catalog.part7")}</button>
            <button className="catalog_button">{t("catalog.part8")}</button>
            <button className="catalog_button">{t("catalog.part9")}</button>
        </div>
        </>
    )
}
export default Catalog