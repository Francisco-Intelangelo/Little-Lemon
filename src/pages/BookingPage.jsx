import { useState } from "react"
import { BookingForm } from "../components/BookingForm"

export const BookingPage = () => {
   const [avaibleTimes ,setAvaibleTimes] = useState([
      "17:00", 
      "18:00", 
      "19:00", 
      "20:00", 
      "21:00", 
      "22:00"
   ])
   const updateTimes = (newTimes) =>{
      setAvaibleTimes(newTimes)
   }
   return(
      <BookingForm avaibleTimes={avaibleTimes} updateTime={updateTimes}/>
   )
}