import olivia from "../assets/people/olivia.jpg"
import noah from "../assets/people/noah.jpg"
import lee from "../assets/people/lee.jpg"
import anny from "../assets/people/anny.jpg"
import { TestimonialCard } from "./TestimonialCard"
export const Testimonials = () => {
   const people = [
      {
         id: 1,
         name: "Olivia",
         img: olivia,
         stars: "⭐⭐⭐⭐",
         review: "Good food, great experience"
      },
      {
         id: 2,
         name: "Noah",
         img: noah,
         stars: "⭐⭐⭐⭐⭐",
         review: "Wonderful place"
      },
      {
         id: 3,
         name: "Lee",
         img:lee,
         stars: "⭐⭐⭐⭐",
         review: "Nice"
      },
      {
         id: 4,
         name: "Anny",
         img: anny,
         stars: "⭐⭐⭐⭐⭐",
         review: "Exellent attention"
      },
   ]

   return(
      <section style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'80px'}}>
         <h2 className="testimonials-title" style={{color:'#fff', fontSize:'43px', margin:'0'}}>Testimonials</h2>
            <article style={{display:'flex', width:'100%',justifyContent:'space-between'}}>
            {people.map((person) => (
               <TestimonialCard 
                  key={person.id}
                  name={person.name}
                  img={person.img}
                  stars={person.stars}
                  review={person.review}
               />
            ))}
            </article>
      </section>
   )
}