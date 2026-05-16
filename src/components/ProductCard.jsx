function ProductCard({ image, title, oldPrice, newPrice }) {
  return (
    <div className="card">

      <img src={image} />

      <h3>{title}</h3>

     <p>

  {oldPrice ? (
    <>
      <del>{oldPrice}$</del> {newPrice}$
    </>
  ) : (
    <>{newPrice}$</>
  )}

</p>

      <button>Add to Cart</button>

    </div>
  )
}

export default ProductCard