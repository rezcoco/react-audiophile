import { Link } from "react-router-dom"

const Product = ({ id, image, name, description, isNew, slug }) => {
  return (
    <div className={`ctr flex flex-col lg:flex-row lg:gap-x-[7.8rem] md:gap-y-14 gap-y-8 ${id % 2 === 1 && 'lg:flex-row-reverse'}`}>
        <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <img className="rounded-lg" src={image.mobile} alt={name} />
        </picture>
        <div className="lg:max-w-[27.813rem] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {isNew && (<p className="text-sm text-cBrown uppercase tracking-[10px] mb-6 md:mb-4">New Product</p>)}
            <h1 className="uppercase text-[28px] md:text-[40px] font-bold leading-[44px]">{name}</h1>
            <p className="text-[15px] text-cDarkGray font-medium my-6 md:mt-8 lg:mt-8 lg:mb-10">{description}</p>
            <Link to={slug} className="btn text-[13px] font-bold bg-cBrown text-white hover:bg-cLightBrown">SEE PRODUCT</Link>
        </div>
    </div>
  )
}

export default Product