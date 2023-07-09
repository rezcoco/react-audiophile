import { useState } from 'react'
import { Input } from './Input'
import { Radio } from './Radio'

const Form = () => {
    const [selectedRadio, setSelectedRadio] = useState("eMoneyPay")

  return (
    <section className='bg-white rounded-lg p-8 h-fit w-full'>
        <h1 className='text-[32px] font-bold'>CHECKOUT</h1>
        <div className='flex flex-col gap-[3.3125rem] my-10'>
            <fieldset className='flex flex-col'>
                <legend className='text-[13px] text-cBrown font-bold mb-4'>BILLING DETAILS</legend>
                <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-4'>
                    <Input id={"name"} label={"Name"} type={"text"} placeholder={"Alexel Ward"}/>
                    <Input id={"email"} label={"Email Address"} type={"email"} placeholder={"alexei@mail.com"}/>
                    <Input id={"phone"} label={"Phone Number"} type={"tel"} placeholder={"+1 202-555-0136"}/>
                </div>
            </fieldset>
            <fieldset className='flex flex-col gap-4'>
                <legend className='text-[13px] text-cBrown font-bold mb-4'>SHIPPING INFO</legend>
                <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6'>
                    <Input className={"md:col-span-full"} id={"address"} label={"Your Address"} type={"text"} placeholder={"1137 Williams Avenue"}/>
                    <Input id={"zip"} label={"ZIP Code"} type={"text"} placeholder={"10001"}/>
                    <Input id={"city"} label={"City"} type={"text"} placeholder={"New York"}/>
                    <Input id={"country"} label={"Country"} type={"text"} placeholder={"United States"}/>
                </div>
            </fieldset>
            <fieldset className='flex flex-col'>
                <legend className='text-[13px] text-cBrown font-bold mb-4'>PAYMENT DETAILS</legend>
                <div className='flex flex-col gap-4 md:flex-row justify-between'>
                    <h4 className='text-xs font-bold'>Payment Method</h4>
                    <div className='flex flex-col gap-4 md:w-1/2'>
                        <Radio onChange={setSelectedRadio} value={selectedRadio} id={"eMoneyPay"} label={"e-Money"} name={"payment"} check={true} />
                        <Radio onChange={setSelectedRadio} value={selectedRadio} id={"codPay"} label={"Cash on Delivery"} name={"payment"} />
                    </div>
                </div>
                {selectedRadio === "eMoneyPay" ? (
                    <div className='flex flex-col md:flex-row gap-4 w-full mt-8 md:mt-4'>
                        <Input className={"md:w-1/2"} id={"eMoneyNumber"} label={"e-Money Number"} type={"text"} placeholder={"238521993"}/>
                        <Input className={"md:w-1/2"} id={"eMoneyPin"} label={"e-Money PIN"} type={"text"} placeholder={"6891"}/>
                    </div>
                ) : (
                    <div className='flex flex-col text-center items-center md:items-start md:text-left md:flex-row gap-8 mt-[30px]'>
                        <img className='w-12 h-12' src="/assets/checkout/icon-cash-on-delivery.svg" alt="Cash on Delivery" />
                        <p className='text-[15px] text-cDarkGray font-medium'>The &lsquo;Cash on Delivery&rsquo; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                )}
            </fieldset>
        </div>
    </section>
  )
}

export default Form