import { Nav } from "../components/Nav"
import { Main } from "../components/Main"
import { SpecialsList } from "../components/SpecialsList"
import { Testimonials } from "../components/Testimonials"
import { About } from "../components/About"
import { Footer } from "../components/Footer"


export const Index = () => {
   return(
      <main>
         <Nav/>
         <Main/>
         <SpecialsList/>
         <Testimonials/>
         <About/>
         <Footer/>
      </main>
   )
}