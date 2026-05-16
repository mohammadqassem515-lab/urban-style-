import aboutimage from "../assets/images/navy-blue-suit.jpeg"


function About() {

  return (

    <section className="about-page">

      <div className="about-container">

        <div className="about-text">

          <h1>About Urban Style</h1>

          <p>
            Urban Style was created to offer simple,
            modern, and comfortable outfits for everyday life.
          </p>

          <p>
            The goal of this project is to combine clean fashion
            aesthetics with a smooth online shopping experience.
          </p>

          <button>
            Explore Collection
          </button>

        </div>


        <div className="about-image">

          <img
            src={aboutimage}
            alt="fashion"
          />

        </div>

      </div>

    </section>
  )
}

export default About