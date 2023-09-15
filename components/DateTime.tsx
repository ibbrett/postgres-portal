'use client'

import React, {useState} from 'react'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import {DateTimeStyle} from '@/utils/styles'

type DateTimeProps = {
  name: string
  timestamp: number | null
}
type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export function DateTime({name, timestamp}: DateTimeProps) {
  let defaultDate = new Date()
  if (timestamp !== null) defaultDate.setTime(timestamp)
  const [startDate, setStartDate] = useState<Value>(defaultDate)
  return (
    <DateTimePicker
      className={`${DateTimeStyle} date-time-picker`}
      name={name}
      value={startDate}
      onChange={date => setStartDate(date)}
    />
  )
}
