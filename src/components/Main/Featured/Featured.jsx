import { Link } from "react-router-dom"
import "./Featured.css"

const Featured = ({ slug, image, description, category, heading }) => {
  return (
    <div className={`Featured__${slug}`}>
        <picture>
            <source media="(min-width: 1440px)" srcSet={image.src.lg} />
            <source media="(min-width: 768px)" srcSet={image.src.md} />
          <img className={`Featured__${slug}-image`} src={image.src.sm} alt={image.alt} />
        </picture>
        <div className={`Featured__${slug}-content`}>
            <h1 className={`Featured__${slug}-heading font-bold uppercase`}>{heading}</h1>
            {description && (<p className="text-[15px] font-medium opacity-75">{description}</p>)}
            <Link to={`/${category}/${slug}`} className={`Featured__${slug}-btn btn font-bold text-[13px]`} href="/">SEE PRODUCT</Link>
        </div>
    </div>
  )
}

export default Featured