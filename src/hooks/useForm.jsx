import {useState} from 'react'

export const useForm = initialValue => {
  const [form, setForm] = useState(initialValue)

  const control = e => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const reset = () => setForm(initialValue)

  const register = name => ({
    name,
    id: name,
    value: form[name],
    onChange: control,
  })

  return {form, register, control, reset}
}
