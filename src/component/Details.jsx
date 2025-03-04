import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [numItems, setNumItems] = useState(0);

  useEffect(() => {
    const getItem = async(id) => {
      console.log(id);
      const response = await fetch(`https://green-scene.onrender.com/api/items/${id}`);
      const jsonObj = await response.json();
      console.log(jsonObj);
      setItem(jsonObj);
    }

    getItem(id);

  }, [])

  const buyButton = () => {
    console.log('Item purchased')
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
          <button onClick={buyButton}>Buy {numItems}</button>
          <input type="range" min="0" max={item.quantity} onChange={(event)=>{setNumItems(event.target.value)}}></input>
        </div>
        :
        <></>
      }
    </>
  )

}

export default Details;