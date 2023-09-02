'use client'

import React, {useState} from 'react'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

type DateTimeProps = {
  name: string
}
type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

// const DateTimeStyle = "text-slate-300 bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none";
const DateTimeStyle =
  'border border-slate-300 text-slate-300 bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none'

export function DateTime({name}: DateTimeProps) {
  const [startDate, setStartDate] = useState<Value>(new Date())

  return (
    <DateTimePicker
      className={DateTimeStyle}
      name={name}
      value={startDate}
      onChange={date => setStartDate(date)}
    />
  )
}
