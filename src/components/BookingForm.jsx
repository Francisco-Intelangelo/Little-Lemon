import { useState } from "react"
import "./css/Form.css"
import { NavLink } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const BookingForm = ({avaibleTimes, updateTimes}) => {
   const [form, setForm] = useState({
      date: "",
      time: "",
      guests: "",
      occasion: "",
   });

   const handleTimeChange = (newTimes) => {
      updateTimes(newTimes)
   }
   const guestsNumber = ["1 - 3", "4 - 6", "7 - 9", "+10"]

   const handleAlert = () => {
      if(form.date === '' && form.time === '' && form.guests === ''){
         alert("Complete the fields")
      }else{
         alert("Reservation Confirmed!!");
      }
   }
   return(
      <section className="form-container">
         <form className="booking-form" id="form-id">
            <label className="label-booking" htmlFor="res-date">Choose date</label>
               <input 
                  className="input-booking"
                  type="date"
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
                  {avaibleTimes.map((index, time) => (
                     <option key={index} value={time} onChange={handleTimeChange}>{time}</option>
                  ))}
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
                  {guestsNumber.map((guest, index) => (
                     <option key={index} value={guest}>{guest}</option>
                  ))}
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
            <button className="confirm-reservation" type="submit" onClick={handleAlert}>
               Make your reservation
            </button>
         </form>
         <NavLink className="cancel" to="/">Back</NavLink>
      </section>
   )
}