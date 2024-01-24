import "../components/css/About.css"
import aMario from "../assets/MarioandAdrianA.jpg"
import bMario from "../assets/MarioandAdrianb.jpg"
export const About = () =>{
   return(
      <section className="section-about">
         <h1 className="title-about">Little Lemon</h1>
         <h2 className="subtitle-about">Chicago</h2>
         <p className="txt-about">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
         <img src={aMario} className="img-aMario" alt="" loading="lazy"/>
         <img src={bMario} className="img-bMario" alt="" loading="lazy"/>
      </section>
   )
}