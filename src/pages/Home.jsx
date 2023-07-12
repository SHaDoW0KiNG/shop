import "./Home.css"
import Index from "../components/header/Index"
import Navbar from "../components/navbar/Navbar";
import Catalog from "../components/navbar/Catalog";
import Banner from "../components/carusel/Banner"
import Card from "../components/card/Card"
import ProductCarusel from "../components/carusel/ProductCarusel";
import ProductCarusel2 from "../components/carusel/ProductCarusel2";
import ProductCarusel3 from "../components/carusel/ProductCarusel3";
import ProductCarusel4 from "../components/carusel/ProductCarusel4";
import CategoryCard from "../components/card/CategoryCard";
export default function Home () {
    return (
        <div className="home">
    <Index />
    <Navbar/>
    <Catalog />
    <Banner />
    <Card />
    <CategoryCard />
    <ProductCarusel />
    <ProductCarusel2 />
    <ProductCarusel3 />
    <ProductCarusel4 />
        </div>
    )
} 