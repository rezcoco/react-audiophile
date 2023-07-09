import { Link } from "react-router-dom"
import products from "../../../data/products"

const Recommendation = ({ others }) => {
    return (
        <section className="ctr text-center">
            <h1 className="text-2xl md:text-[2rem] font-bold mb-10">YOU MAY ALSO LIKE</h1>
            <div className="flex flex-col md:flex-row lg:gap-[30px] md:gap-[11px] gap-14">
                {others.map(({ image, name, slug }) => {
                    const category = products.find(product => product.slug === slug).category
                    return (
                        <div key={name} className="flex flex-col items-center gap-8">
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={image.desktop} />
                                <source media="(min-width: 768px)" srcSet={image.tablet} />
                                <img className="rounded-lg" src={image.mobile} alt={name} />
                            </picture>
                            <h1 className="text-2xl lg:text-[2rem] font-bold uppercase">{name}</h1>
                            <Link to={`/${category}/${slug}`} className="btn text-[13px] bg-cBrown hover:bg-cLightBrown text-white font-bold">SEE PRODUCT</Link>
                        </div>
                        )
                })}
            </div>
    </section>
  )
}

export default Recommendation