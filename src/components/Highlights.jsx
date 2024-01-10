// eslint-disable-next-line react/prop-types
export const Highlights = ({title, imageSrc, price, description, logo}) => {
   return(
      <article className="content-card">
         <img src={imageSrc} className="image-card" alt="photo specials"/>
         <section className="text-card">
            <h2 className="title">{title}</h2>
            <span className="price">${price}</span>
            <p className="description">{description}</p>
            <button className="delivery">Order a delivery</button>
            <img src={logo} className="logo-delivery" alt="logo of delivery"/>
         </section>
      </article>
   )
}