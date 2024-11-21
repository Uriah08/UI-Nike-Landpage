import { products } from "../constant/index"
import PopularProductCard from "../components/PopularProductCard"

const PopularProductSection = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Product</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Our selection of the most popular and trendy sneakers from our store.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias id explicabo nulla labore delectus! Ad maiores ratione magnam veritatis nihil quis quo deserunt quod qui. Ipsum et tempore ea eligendi.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">{products.map((product) => {
        return <PopularProductCard key={product.id} {...product} imageURL={product.imgURL}/>
      })}</div>
    </section>
  )
}

export default PopularProductSection