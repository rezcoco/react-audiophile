const About = () => {
  return (
    <section className="ctr flex flex-col lg:flex-row-reverse gap-16 justify-between items-center lg:max-h-[36.75rem]">
        <picture>
            <source media="(min-width: 1024px)" srcSet="/assets/shared/desktop/image-best-gear.jpg" />
            <source media="(min-width: 768px)" srcSet="/assets/shared/tablet/image-best-gear.jpg" />
            <img className="rounded-lg" src="/assets/shared/mobile/image-best-gear.jpg" alt="Best Gear" />
        </picture>
        <div className="max-w-[36rem] lg:max-w-[28rem] flex flex-col gap-8 text-center lg:text-left">
            <h1 className="uppercase text-[28px] leading-[28px] md:text-[40px] md:leading-[44px] font-bold">Bringing you the <span className="text-cBrown">best</span> audio gear</h1>
            <p className="text-[15px] text-cDarkGray font-medium leading-[25px]">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
    </section>
  )
}

export default About