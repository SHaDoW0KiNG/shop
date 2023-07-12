import "./ProductDetail.css"
import ProductDetailCarusel from "../components/carusel/ProductDetailCarusel"
import {BsCheck} from "react-icons/bs"
import {BsStar} from "react-icons/bs"
import {BsHeart} from "react-icons/bs"
import {FaBalanceScaleLeft} from "react-icons/fa"
import { useParams } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect, } from "react"

export default function ProductDetail () {
    const { id } = useParams();
    const [data,setData] = useState()
    async function getData () {
        await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => setData(res.data));
    }
    useEffect (() => {
        getData();
    }, [])
    console.log("data", data?.products);
    return (
        <div className="productdetail">
            <div className="product_detail_button">
                <button>главная</button>
                <button>каталог товаров</button>
                <button>{data?.category}</button>
                <button>{data?.brand}</button>
                <button style={{backgroundColor:"peachpuff"}}>{data?.title}</button>
                <div style={{borderBottom:"1px solid whitesmoke"}} className="product_detail_name">
                  <br />  <h3>{data?.title} / {data?.description}</h3>
                    <button style={{marginLeft:"87vw"}}><BsCheck style={{backgroundColor:"green",color:"white",fontSize:"18px",borderRadius:"50%",marginRight:"5px"}}/>Есть в наличии</button>
                </div>
            </div>
            <div className="product_detail_info">
                <div className="product_detail_status">
                    <span><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></span>
                    <span style={{marginLeft:"10px",marginRight:"10px"}}><BsHeart style={{marginRight:"4px"}} />в избранное</span>
                    <span><FaBalanceScaleLeft style={{marginRight:"4px"}}/>в сравнение</span>
                    <ProductDetailCarusel />
                </div>
            </div>
        </div>
    )
}