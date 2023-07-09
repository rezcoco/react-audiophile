import { Link } from "react-router-dom"

const Category = ({ title, image }) => {
  return (
    <Link to={`/${title.toLowerCase()}`} className='lg:w-[350px] lg:h-[204px] md:w-[223px] w-[327px] h-[165px] bg-cGray relative flex flex-col justify-end items-center py-8 rounded-lg'>
        <img className={`mx-auto absolute inset-x-0  top-[-3.125rem] lg:top-[-4.375rem] ${image.sm.width} ${image.lg.width}`} src={image.src} alt={title} />
        <h2 className='text-[15px] lg:text-lg font-bold uppercase'>{title}</h2>
        <div className='text-[13px] text-[#787878] font-bold hover:text-cBrown flex gap-4 items-center'>
            SHOP
            <span>
                <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="arrow" />
            </span>
        </div>
    </Link>
  )
}

export default Category