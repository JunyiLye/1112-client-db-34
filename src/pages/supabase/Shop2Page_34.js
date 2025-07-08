import { useState, useEffect } from 'react';
import apikey from '../../apikey.js'

const Shop2Page_34 = () => {
  const [products, setProducts ] = useState([]);
  
  const getShop2_34 = async () => {
      try{
        const response = await fetch(`https://fvrblhdevzlksdpibgfv.supabase.co/rest/v1/shop2_34?select=*`, {
          method: 'GET',
          headers: {
            apikey,
            Authorization: `Bearer ${apikey}`,
          }
        });
        const data = await response.json();
        console.log('shop2 data', data);
        setProducts(data);
      }catch(error){
        console.log(error);
      }
  }

  useEffect(()=>{
    getShop2_34();
  }, []);

  return (
  <div className="shop-page">
    <div className="collection-page">
      <h1 className="title">All Products -- Supabase shop2</h1>
      <div className="items">
        { products.map( (product) => {
          const {name, price, local_url} = product;
          return(
            <div className="collection-item">
            <img className="image" src={local_url} />
            <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
            </div>
            <button className="custom-button">Add to Cart</button>
          </div>
          )
        })}
        
        {/* <div className="collection-item">
          <img
            className="image"
            src="https://i.ibb.co/4W2DGKm/floral-blouse.png"
          />
          <div className="collection-footer">
            <span className="name">Floral Blouse</span>
            <span className="price">20</span>
          </div>
          <button className="custom-button">Add to Card</button>
        </div> */}
        
      </div>
    </div>
  </div>

  );
}

export default Shop2Page_34;
