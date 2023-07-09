import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Form } from './Form'
import { Summary } from './Summary'
import { useCart } from '../../context/CartContext'
import { Footer, Header } from '../../components'
import { Confirmation } from '../../components/Confirmation/'

const Checkout = () => {
  const [submitForm, setSubmitForm] = useState(false)
  const methods = useForm()
  const { cartItems, getTotalPrice } = useCart()
  const navigate = useNavigate()

  function onSubmit(data) {
    setSubmitForm(true)
    return console.log(data)
  }
  
  return (
    <FormProvider { ...methods }>
      <div className='bg-cWhite'>
        {submitForm && <Confirmation />}
        <header className="bg-cDark">
          <Header />
        </header>
        <main className='ctr flex flex-col my-20 max-w-[35rem] lg:max-w-[45.6rem] xl:max-w-[69.625rem] w-full'>
          <button onClick={() => navigate(-1)} className="text-[15px] text-cDarkGray font-medium hover:text-cBrown lg:mb-14 mb-6 text-left">Go Back</button>
          <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-8 xl:flex-row xl:items-start w-full'>
            <Form />
            <Summary items={cartItems} totalPrice={getTotalPrice} />
          </form>
        </main>
        <Footer/>
      </div>
    </FormProvider>
  )
}

export default Checkout