import "./ProductCard.css"
import { useState } from "react"
import {FaOpencart} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {FaBalanceScaleLeft} from "react-icons/fa"
import { colors } from "@mui/material"
import { Link } from "react-router-dom";
function ProductCard ({image,title,price,id}) {
    const [name,setName] = useState (0)
    function Increase () {
        setName(name +1)
    }
    function Decrease () {
        setName (name -1)
    }
return (
    
    <div className="productcard">
    <Link to={`/Product/${id}`}>
        <img src={image} alt="" style={{width:"180px",height:"180px"}}/>
        <p>{title}</p>
        <h4>{price} $</h4> </Link>
    {name == 0 ? (
        <div className="productcard_icons">
            <button onClick={Increase}><FaOpencart style={{fontSize:"23px"}}/> В корзину</button>
            <span><AiOutlineHeart style={{marginLeft:"10px",color:"gray" }}/></span>
            <span><FaBalanceScaleLeft style={{marginLeft:"10px",color:"gray"}}/></span>
        </div>
    ):(
        <div className="productcard_shop">
            <span onClick={Increase} style={{marginLeft:"10px"}}>+</span>
            <span>{name}</span>
            <span onClick={Decrease} style={{marginRight:"10px"}}>-</span>
        </div>
    )}
    </div>
);
}
export default ProductCard