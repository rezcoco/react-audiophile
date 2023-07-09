import categoryData from '../../data/category'
import Category from './Category/Category'

const Categories = () => {
    const categoryElements = categoryData.map((category) => <Category key={category.title} title={category.title} image={category.image} /> )
  return (
    <section
      className="flex flex-col items-center gap-16 text-center md:flex-row md:justify-center md:gap-2.5 lg:gap-[1.875rem]"
    >
      {categoryElements}
    </section>
  )
}

export default Categories