import '../components/css/TestimonialCard.css'
// eslint-disable-next-line react/prop-types
export const TestimonialCard = ({name, img, stars, review}) => {
   return(
      <section className="section-card">
         <p className="star-card">{stars}</p>
         <img src={img} className="img-card" alt="photo person testimonial"/>
         <h4 className="name-card">{name}</h4>
         <p className="review-card">{review}</p>
      </section>
   )
}