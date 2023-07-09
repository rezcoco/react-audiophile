const Information = ({ description, includes }) => {
  return (
    <section className="ctr flex flex-col lg:flex-row lg:gap-[7.81rem] md:gap-[7.5rem] gap-[5.5rem] w-full">
        <div className="lg:max-w-[39.6875rem]">
            <h1 className="text-2xl md:text-[2rem] font-bold mb-8">FEATURES</h1>
            <p className="text-[15px] text-cDarkGray leading-[25px] font-medium">{description}</p>
        </div>
        <div>
            <h1 className="text-2xl md:text-[2rem] font-bold mb-8">IN THE BOX</h1>
            <div className="flex flex-col gap-2">
                {includes.map((product) => (
                    <div key={product.item} className="flex gap-6">
                        <span className="text-[15px] text-cBrown font-bold">{`${product.quantity}x`}</span>
                        <p className="text-[15px] text-cDarkGray font-medium">{product.item}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Information