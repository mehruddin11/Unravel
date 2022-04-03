const NavBar = () => {
  return (
    <div className="bg-img">
      <div className="container ">
        <h3 style={{ color: "black" }}> UNRAVEL</h3>
        <ul className="links">
          <li>Home</li>
          <li>Reviews</li>
          <li>Blogs</li>
          <li>Unravelforbusiness</li>
        </ul>
        <div className="btn-container">
          <button className="btn">login</button>
          <button className="btn"> Signup</button>
        </div>
      </div>
      <div className="quote">
        <h4>
          {" "}
          Discovery your perfect business Nearby!
          <p className="para"> check Ratings, Reads Reviews & buy </p>
        </h4>
      </div>
      <div className="input-form">
        <input
          className="search"
          type="text"
          placeholder="what are you loking for"
        />
        <input
          className="category"
          type="text"
          placeholder="select category "
        />{" "}
        <button className="btn" type="search">
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
