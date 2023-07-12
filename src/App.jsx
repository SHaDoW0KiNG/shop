import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Spinner from "./pages/Spinner"
import { Routes,Route } from "react-router-dom";

function App() {
  return (
<>
<div className="texnomart">

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="loading" element={<Spinner/>}/>
  <Route path="Product/:id" element={<ProductDetail/>}/>
</Routes>

</div>
</>
  );
}

export default App;
