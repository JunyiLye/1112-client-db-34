import { useState, useEffect } from 'react';

const Shop2Page_34 = () => {
  const [products, setProducts ] = useState([]);
  
  const getShop2_34 = async () => {
      try{
        const response = await fetch(`https://fvrblhdevzlksdpibgfv.supabase.co/rest/v1/shop2_34?select=*`, {
          method: 'GET',
          headers: {
            apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2cmJsaGRldnpsa3NkcGliZ2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODg2NDIsImV4cCI6MTk5ODA2NDY0Mn0.FgF-29UktvIYFlC5BAfr3q83RZ0Noa9rseBX2SrmCeQ`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2cmJsaGRldnpsa3NkcGliZ2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODg2NDIsImV4cCI6MTk5ODA2NDY0Mn0.FgF-29UktvIYFlC5BAfr3q83RZ0Noa9rseBX2SrmCeQ`,
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
