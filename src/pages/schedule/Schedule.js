import { useState, useEffect } from 'react'

import ReactCalendar from 'react-calendar'
import DatePicker from 'react-datepicker'
import 'react-calendar/dist/Calendar.css'
import 'react-datepicker/dist/react-datepicker.css'

import './Schedule.css'

export default function Schedule() {

  const [calendarDate, setDate] = useState(new Date());
  const onDateChange = (newDate) =>{
    setDate(newDate)
  }

  return (
    <div className="calendar-form">
      <h2 className="page-title">Your Meeting Schedule.</h2>
      <ReactCalendar
        onChange={onDateChange} 
        value={calendarDate} 
        showNeighboringMonth={false}
      />
      <DatePicker
        selected={calendarDate}
        onChange={(date) => setDate(date)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </div>
  )
}