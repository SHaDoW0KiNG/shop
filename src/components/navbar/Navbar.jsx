import "./Navbar.css"
import Member from "../LogIn"
import {BiMicrophone} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import {BsBoxSeam} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import {FaBalanceScaleLeft} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {BsCart2} from "react-icons/bs"
import { useTranslation } from 'react-i18next';
import axios from "axios"
import React, { useEffect, useState } from "react";
import LogIn from "../LogIn"
function Navbar () {
    const [modalShow, setModalShow] = React.useState(false);
    const { t,i18n } = useTranslation();
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    useEffect(() => {
      if (value.length > 2) {
        axios
          .get(`https://dummyjson.com/products/search?q=${value}`)
          .then((res) => setData(res.data))
          .catch((ee) => {
            console.log(ee);
          });
      }
      
    }, [value]);
    console.log(value);
    console.log(data);
    return (
        <>
        <div className="navbar">
            <img src="https://texnomart.uz/_nuxt/img/texnomart-logo.fcda25c.svg" alt="" className="navbar_img" />
            <div className="navbar_search">
                <div className="white_bacground">
                <select className="navbar_select">
                    <option value="">{t("navbar.part1")}</option>
                    <option value="">{t("navbar.part2")}</option>
                    <option value="">{t("navbar.part3")}</option>
                    <option value="">{t("navbar.part4")}</option>
                    <option value="">{t("navbar.part5")}</option>
                    <option value="">{t("navbar.part6")}</option>
                    <option value="">{t("navbar.part7")}</option>
                    <option value="">{t("navbar.part8")}</option>
                </select>
                <input type="search"
                 name="" id="search"
                 value={value}
                 onChange={(e) => setValue(e.target.value)}
                  />
                   {data?.products?.length > 0 && value !== "" ? (
        <div className="z_index"
          style={{
            width: 250,
            background: "white",
            marginTop: 20,
            marginLeft: 205,
            position: "absolute",
            top: 50
          }}
        >
          {data?.products?.map((i) => (
            <li style={{ margin: 10, listStyle: "none" }}> {i.title} <img src={i.thumbnail} alt="" style={{width:100}} /></li>
          ))}
        </div>
      ) : (
        ""
      )}
                <BiMicrophone className="microphone"/>
                
                </div>
                <AiOutlineSearch className="searcher"/>
                
            </div>
        <nav className="navbar_nav">
            <button className="navbar_button"> <BsBoxSeam className="navbar_icons" /> <br />{t("navbar.part9")}</button>
            <button className="navbar_button">  <LogIn /> </button>
            <button className="navbar_button"> <FaBalanceScaleLeft className="navbar_icons" /> <br />{t("navbar.part11")} </button>
            <button className="navbar_button"> <AiOutlineHeart className="navbar_icons" /> <br /> {t("navbar.part12")}</button>
            <button className="navbar_button nbr"> <BsCart2 className="navbar_icons" /> <br />{t("navbar.part13")} </button>
        </nav>
        </div>
        </>
    )
}
export default Navbar