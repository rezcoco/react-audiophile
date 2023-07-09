import { useLocation } from "react-router-dom";
import { Product, About, Categories, Footer, Banner } from "../../components";
import products from "../../data/products";

const Products = () => {
    const { pathname } = useLocation()
    const category = pathname.slice(1)
    const filtered = products.filter((product) => product.category === category)
        .map((product, index) => (
            <Product 
                key={product.id} 
                id={index}
                image={product.categoryImage} 
                name={product.name}
                description={product.description}
                isNew={product.new}
                slug={product.slug}
            />
        ))
  return (
    <div>
        <header>
            <Banner category={category} />
        </header>
        <main className="flex flex-col gap-40 my-40">
            <section className="ctr flex flex-col gap-[7.5rem]">{filtered}</section>
            <Categories />
            <About />
        </main>
        <Footer />
    </div>
  )
}

export default Products