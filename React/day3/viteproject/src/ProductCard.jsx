import "./App.css"

import images from "./assets/images/bike.jpg"


const ProductCard = ()=>{
return (<>

<div className = "Product" >
    <div className = "ProductImage">
        <img src={images} alt="" width = "450px" />
    </div>

<div className = "Details" >
    <p><b>Product Name  :</b>Sports Racing Car</p>
    <p><b>Product Price :</b>2,00,00,000</p>

    <div className = "Btn">
       <button><b>Buy Now</b></button>
    </div>
  
</div>

</div>

</>)

}
export default ProductCard