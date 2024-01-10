import { Nav } from "../components/Nav"
import { Main } from "../components/Main"
import { SpecialsList } from "../components/SpecialsList"
// import { Footer } from "../components/Footer"


export const Index = () => {
   return(
      <main>
         <Nav/>
         <Main/>
         <SpecialsList/>
         {/*<Footer/> */}
      </main>
   )
}