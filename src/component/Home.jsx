import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getItems = async() => {
      const response = await fetch('https://green-scene.onrender.com/api/items');
      const jsonObj = await response.json();
      console.log(jsonObj);
      setItems(jsonObj)
    }

    getItems();
  }, [])


  return (
    <>
      <h1>HOMEPAGE</h1>
      {
        items?
        <>
          <div id="items">
            <ul>
            {
              items.map((item) => {
                return (
                  <div key={item.id} style={{display: "flex", flexDirection: "column"}}>
                    <li>
                      <h2>{item.name}</h2>
                      <img src={item.img_url} style={{height: '20vh'}}></img>
                    </li>
                    <Link to={`/items/${item.id}`}>See Details</Link>
                  </div>
                )
              })
            }
            </ul>
          </div>
        </>
        :
        <>
          <h2>Fetching the items...</h2>
        </>
      }
    </>
  )

}

export default Home;