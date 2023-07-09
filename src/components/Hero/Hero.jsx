import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="ctr bg-cover bg-no-repeat bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop max-w-[23.4375rem] bg-bottom pt-28 pb-16 md:max-w-[48rem] md:pb-[10.4375rem] md:pt-[7.875rem] lg:max-w-[90rem] lg:bg-bottom lg:px-[10rem] lg:pt-[7.5rem]">
      <div className="lg:max-w-[398px] flex flex-col gap-y-6 text-center lg:text-left items-center lg:items-start">
          <p className="tracking-[10px] text-sm text-cDarkGray">NEW PRODUCT</p>
          <h1 className="uppercase text-[36px] md:text-[56px] font-bold text-white leading-[58px]">XX99 Mark II Headphones</h1>
          <p className="text-cBodyText text-[15px] font-[500] w-[38ch]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to="/headphones/xx99-mark-two-headphones" className="btn text-[13px] bg-cBrown hover:bg-cLightBrown font-bold text-white mt-6">SEE PRODUCT</Link>
      </div>
    </div>
  )
}

export default Hero