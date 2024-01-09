import restaurantfood from "../assets/restauranfood.jpg"
import "./css/Main.css"
export const Main = () =>{
   return(
      <>
         <div className="background"></div>
         <main className="main-container">
            <section className="main-content">
               <h1 className="title-main">Little Lemon</h1>
               <h2 className="subtitle-main">Chicago</h2>
               <p className="context">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
               <bottom className="btn-reserve">Reserve a Table</bottom>
            </section>
            <img 
               src={restaurantfood}
               className="img-main"
               alt="img main"
            />
         </main>
      </>
   )
}