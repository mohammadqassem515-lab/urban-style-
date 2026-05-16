function Contact() {

  return (

    <section className="contact-page">

      <div className="contact-container">

        <div className="contact-info">

          <h1>Contact Us</h1>

          <p>
            Feel free to contact us for any questions,  feedback, or product inquiries .
            
          </p>

          <p>Email: urbanstyle@gmail.com</p>

          <p>Phone: +961 70 000 000</p>

        </div>


  <form
  className="contact-form"

  onSubmit={(e) => {
    e.preventDefault()

    alert("Message sent successfully!")
  }}
>

  <input
    type="text"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    placeholder="Your Email"
    required
  />

  <textarea
    placeholder="Your Message"
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</form>

      </div>

    </section>
  )
}

export default Contact