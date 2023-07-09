import { Featured } from "./Featured"
import { Categories } from "../Categories"
import { About } from "../About"
import featuredData from '../../data/featured'

const Main = () => {
    const featuredElements = featuredData.map((feature) => <Featured key={feature.slug} slug={feature.slug} image={feature.image} heading={feature.name} description={feature.description} category={feature.category} />)
  return (
    <main className="flex flex-col gap-[10.5rem] mt-[10rem] mb-[12.5rem]">
      <Categories />
      <section className="ctr flex flex-col gap-6 md:gap-8 lg:gap-12">
        {featuredElements}
      </section>
      <About />
    </main>
  )
}

export default Main