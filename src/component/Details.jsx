import { useEffect, useState} from 'react'
import { useParams, useNavigate} from 'react-router-dom'

const Details = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [numItems, setNumItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async(id) => {
      const response = await fetch(`https://green-scene.onrender.com/api/items/${id}`);
      const jsonObj = await response.json();
      setItem(jsonObj);
    }

    getItem(id);

  }, [])


  const buyButton = async() => {
    const token = localStorage.getItem("token");
    if(!token){
      navigate('/login')
    }else{
      const response = await fetch(`https://green-scene.onrender.com/api/user/cart`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"itemId": item.id, "quantity": numItems, "token": `${token}`})
      });
      const json = await response.json();
      alert("Items added to cart");
    }
  }

  return (
    <>
      <h1>Details</h1>
      {
        item?
        <div id='item'>
          <h2>{item.name}</h2>
          <h3>{item.description}</h3>
          <h3>${item.price/100}</h3>
          <h3>{item.quantity} in stock</h3>
          <img src={item.img_url} style={{height: '20vh'}}></img>
          <h3>Located in {item.location}</h3>
          <button onClick={buyButton}>Add {numItems} to Cart.</button>
          <input type="range" min="0" max={item.quantity} onChange={(event)=>{setNumItems(event.target.value)}}></input>
        </div>
        :
        <></>
      }
    </>
  )

}

export default Details;