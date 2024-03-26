

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="hero-para">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btns">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="icons">
            <img src="flipkart.png" alt="flipkart" />
            <img src="amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="shoe_image.png" alt="" />
      </div>
    </main>
  );
}

export default Hero