import logo from "../../src/logo.svg"
import "../components/css/Footer.css"
export const Footer = () =>{
   return(
      <section className="footer">
         <img className="logo-footer" src={logo} alt="Logo little lemon restaurant" loading="lazy"/>
         <ul className="column">
            <li className="bold-footer">Doormat</li>
            <li>Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
         </ul>
         <ul className="column">
            <li className="bold-footer">Contac</li>
            <li>Adress</li>
            <li>Phone number</li>
            <li>Email</li>
         </ul>
         <ul className="column">
            <li className="bold-footer">Social Media Links</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Linkdin</li>
         </ul>
      </section>
   )
}