import { Header } from "../Header"

const Banner = ({ category }) => {
  return (
    <div className="bg-cDark">
        <Header color={'#101010'} />
        <div className="text-center py-36 bg-cDark">
            <h1 className="text-[56px] text-white font-bold uppercase">{category}</h1>
        </div>
    </div>
  )
}

export default Banner