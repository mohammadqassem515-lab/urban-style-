import beigeSuit from "../assets/images/beige-suit.jpeg"
import brownJacket from "../assets/images/brown-corduroy-aviator-jacket.jpeg"
import beigeBoot from "../assets/images/beige-chelsea-boot.jpeg"
import summerSet from "../assets/images/Black-set.jpeg"

import ProductCard from "../components/ProductCard"

 function Home() {
  return (
    <div>

      
      <section className="hero">

        <div className="hero-content">
          <h1>Urban Style</h1>

          <p>
            Clothes that feel right for everyday life.
          </p>

          <button>Shop Now</button>
        </div>

      </section>

           <section className="featured">

  <div className="featured-text">

    <h2>Summer Collection</h2>

    <p>
      Lightweight outfits designed for everyday comfort.
    </p>

    <button>Explore Now</button>

  </div>

  <div className="featured-image">

    <img src={summerSet} />

  </div>

</section>


      
      <section className="deals">

  <h2>Special Deals</h2>

  <div className="product-container">

    <ProductCard
      image={beigeSuit}
      title="Beige Suit"
      oldPrice="90"
      newPrice="75"
    />

    <ProductCard
      image={brownJacket}
      title="Brown Jacket"
      oldPrice="70"
      newPrice="60"
    />

    <ProductCard
      image={beigeBoot}
      title="Beige Chelsea Boot"
      oldPrice="65"
      newPrice="55"
    />

  </div>

</section>


      
      <section className="feedback">

        <h2>Customer Feedback</h2>

        <div className="reviews">

          <div className="review">
            <p>
              "Really comfortable clothes and nice quality."
            </p>

            <h4>- Ahmad</h4>
          </div>


          <div className="review">
            <p>
              "Simple style with affordable prices."
            </p>

            <h4>- Sara</h4>
          </div>

        </div>

      </section>
 

    </div>
  )
}

export default Home