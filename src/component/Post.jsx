
const Post = () => {
  return (
    <>
      <h1>POST</h1>
      <form>
        <label>
          Product Name: <input />
        </label>
        <label>
          Quantity: <input />
        </label>
        <label>
          Location: <input />
        </label>
        <label>
          Price: <input />
        </label>
        <label>
          img_url: <input />
        </label>
        <label>
          Description: <input />
        </label>
        <p>Type:</p>
        <select>
          {/* Future jack, make sure when you add event listeners to each option 
          to have them return a strict string. It will obviously be different to just normal
          user input*/}
          <option>
            Seed
          </option>
          <option>
            Tool
          </option>
          <option>
            Sprout
          </option>
        </select>
      </form>
    </>
  )

}

export default Post;