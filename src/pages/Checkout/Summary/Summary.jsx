import shortedName from "../../../utilities/shortedName"
import priceConverter from "../../../utilities/priceConverter"
import calculateVat from "../../../utilities/calculateVat"

const Summary = ({ items, totalPrice }) => {
  const total = totalPrice()
  const vat = calculateVat(total)
  const shipping = 50
  const grandTotal = total + vat + shipping

  return (
    <section className="flex flex-col gap-8 p-8 bg-white rounded-lg h-fit w-full xl:max-w-[21.875rem]">
      <h2 className="text-lg font-bold">SUMMARY</h2>
      <div className="flex flex-col gap-6">
        {items.map(({ id, name, price, quantity, slug }) => (
          <div key={id} className="flex items-center gap-4">
            <div>
              <img className="w-[4rem] h-[4rem] rounded-lg" src={`/assets/cart/image-${slug}.jpg`} alt={name} />
            </div>
            <div>
              <p className="text-[15px] font-bold">{shortedName(name)}</p>
              <p className="text-sm text-cDarkGray font-bold">{priceConverter(price)}</p>
            </div>
            <p className="text-[15px] text-cDarkGray font-bold ml-auto">{`x${quantity}`}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-[15px] text-cDarkGray font-medium">TOTAL</p>
          <p className="text-lg font-bold">{priceConverter(total)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[15px] text-cDarkGray font-medium">SHIPPING</p>
          <p className="text-lg font-bold">{priceConverter(shipping)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[15px] text-cDarkGray font-medium">VAT (INCLUDED)</p>
          <p>{priceConverter(vat)}</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-[15px] text-cDarkGray font-medium">GRAND TOTAL</p>
          <p className="text-lg text-cBrown font-bold">{priceConverter(grandTotal)}</p>
        </div>
      </div>
      <button type="submitv" className="btn text-[13px] text-white font-bold bg-cBrown hover:bg-cLightBrown w-full">CONTINUE & PAY</button>
    </section>
  )
}

export default Summary