import { useState } from "react"
import "./css/Form.css"
import { NavLink } from "react-router-dom"


export const BookingForm = () => {
   const actualDate = new Date()
   const [form, setForm] = useState({
      date: "",
      time: "",
      guests: "",
      occasion: "",
   });
   const handleAlert = () => {
      alert("Reservation Confirmed!!");
   }
   return(
      <section className="form-container">
         <form className="booking-form">
            <label className="label-booking" htmlFor="res-date">Choose date</label>
               <input 
                  className="input-booking"
                  type="date"
                  min={actualDate}
                  id="res-date"
                  required
                  value={form.date}
                  onChange={e => {
                     setForm({
                        ...form, 
                        date: e.target.value
                     })
                  }}
                  />
            <label className="label-booking" htmlFor="res-time">Choose time</label>
               <select 
                  className="input-booking"
                  id="res-time"
                  required
                  value={form.time}
                  onChange={e => {
                     setForm({
                        ...form,
                        time: e.target.value
                     })
                  }}
                  >
                  <option value="">--Please choose an option--</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
               </select>
            <label className="label-booking" htmlFor="guests">Number of guests</label>
               <select 
                  className="input-booking"
                  id="guests"
                  required
                  value={form.guests}
                  onChange={e => {
                     setForm({
                        ...form,
                        guests: e.target.value
                     })
                  }}
                  >
                  <option value="">--Please choose an option--</option>
                  <option>1 - 3</option>
                  <option>4 - 6</option>
                  <option>7 - 9</option>
                  <option>+10</option>
               </select>
            <label className="label-booking" htmlFor="occasion">Occasion</label>
               <select 
                  className="input-booking" 
                  id="occasion"
                  value={form.occasion}
                  onChange={e => {
                     setForm({
                        ...form,
                        occasion: e.target.value
                     })
                  }}
                  >
                  <option>Casual</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
               </select>
            <input 
               className="confirm-reservation"
               type="submit"
               value="Make Your reservation"
               onClick={handleAlert}
               />
         </form>
         <NavLink className="cancel" to="/">Back</NavLink>
      </section>
   )
}