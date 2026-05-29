import { useState } from "react"

import products from "../data/products"

import ProductCard from "../components/ProductCard"

function Products() {

  const [selectedCategory, setSelectedCategory] =useState("All")

  const [searchTerm, setSearchTerm] =  useState("")


  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategory ===    "All" ||
      product.category ===selectedCategory

    const matchesSearch =
      product.title.toLowerCase().includes(
        searchTerm.toLowerCase()
      )

    return matchesCategory && matchesSearch

  })


  return (

    <section className="products">

        <div className="search-bar">

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>


     
      <div className="filters">

        <button onClick={() => setSelectedCategory("All")}>
          All
        </button>

        <button onClick={() => setSelectedCategory("Suits")}>
          Suits
        </button>

        <button onClick={() => setSelectedCategory("Jackets")}>
          Jackets
        </button>

        <button onClick={() => setSelectedCategory("polo T-shirt")}>
          polo T-shirt
        </button>

        <button onClick={() => setSelectedCategory("Jeans")}>
          Jeans
        </button>

        <button onClick={() => setSelectedCategory("Summer shirts")}>
          Summer shirts
        </button>

        <button onClick={() => setSelectedCategory("Summer sets")}>
          Summer sets
        </button>

        <button onClick={() => setSelectedCategory("Sneakers")}>
          Sneakers
        </button>

        <button onClick={() => setSelectedCategory("Chunky derby sneakers")}>
          Chunky derby sneakers
        </button>

        <button onClick={() => setSelectedCategory("Chelsea boot")}>
          Chelsea boot
        </button>

        <button onClick={() => setSelectedCategory("Moccasine leather")}>
          Moccasine leather
        </button>

      </div>


     
      <div className="product-container">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />

        ))}

      </div>

    </section>
  )
}

export default Products