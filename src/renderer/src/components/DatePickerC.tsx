import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const DatePickerC = (): JSX.Element => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  })

  const handleValueChange = (newValue): void => {
    setValue(newValue)
  }

  return <Datepicker value={value} onChange={handleValueChange} showShortcuts={true} />
}

export default DatePickerC
