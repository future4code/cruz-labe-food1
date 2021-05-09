import {useState} from 'react'

export const useForm = initialValue => {
  const [form, setForm] = useState(initialValue)

  const control = e => {
    const {name, dataset, value, textContent} = e.target
    setForm({...form, [dataset.name || name]: value || textContent})
  }

  const reset = () => setForm(initialValue)

  const register = (name, event) => ({
    [event ? 'title' : 'name']: name,
    [event ? 'data-name' : 'id']: name,
    value: form[name],
    [event || 'onChange']: control,
  })

  return {form, register, control, reset, setForm}
}
