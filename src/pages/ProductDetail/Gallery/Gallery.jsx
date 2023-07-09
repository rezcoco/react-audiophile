const Gallery = ({ images, alt }) => {
  return (
    <section className="ctr grid md:grid-rows-2 md:grid-cols-[2fr_3fr] gap-6">
        <picture>
            <source media="(min-width: 1024px)" srcSet={images.first.desktop} />
            <source media="(min-width: 768px)" srcSet={images.first.tablet} />
            <img className="rounded-lg h-full" src={images.first.mobile} alt={alt} />
        </picture>
        <picture className="md:row-start-2">
            <source media="(min-width: 1024px)" srcSet={images.second.desktop} />
            <source media="(min-width: 768px)" srcSet={images.second.tablet} />
            <img className="rounded-lg h-full" src={images.second.mobile} alt={alt} />
        </picture>
        <picture className="md:cols-start-2 md:row-span-full">
            <source media="(min-width: 1024px)" srcSet={images.third.desktop} />
            <source media="(min-width: 768px)" srcSet={images.third.tablet} />
            <img className="rounded-lg h-full" src={images.third.mobile} alt={alt} />
        </picture>
    </section>
  )
}

export default Gallery