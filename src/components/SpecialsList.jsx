import { Highlights } from "./Highlights"
import "../components/css/Highlights.css"
import greekSalad from "../assets/greekSalad.jpg"
import bruchetta from "../assets/bruchetta.jpg"
import lemonDessert from "../assets/lemonDessert.jpg"
const specials = [
   {
      id: 1,
      getImageSrc: greekSalad,
      title: "Greek salad",
      price: 12.99,
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      logo: "../assets/moped.png",
   },
   {
      id: 2,
      getImageSrc: bruchetta,
      title: "Bruchetta",
      price: 5.99,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      logo: "../assets/moped.png",
   },
   {
      id: 3,
      getImageSrc: lemonDessert,
      title: "Lemon Dessert",
      price: 5.00,
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagine.",
      logo: "../assets/moped.png",
   },
]
export const SpecialsList = () => {
   return(
      <>
         <h2>This weeks Specials!</h2>
         <button>Online Menu</button>
         <section className="section-cards">
            {specials.map((special) => (
               <Highlights
                  key={special.id}
                  title={special.title}
                  description={special.description}
                  imageSrc={special.getImageSrc}
                  price={special.price}
                  logo={special.logo}
               />
            ))}
         </section>
      </>
   )
}