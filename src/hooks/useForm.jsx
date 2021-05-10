import {useEffect} from 'react'
import {useRef} from 'react'
import {useState} from 'react'

export const useForm = initialValue => {
  const [form, setForm] = useState(initialValue)
  const [error, setError] = useState(initialValue)
  const [success, setSuccess] = useState(initialValue)
  const validateRef = useRef({})

  useEffect(() => {
    const last = validateRef.current.lastChange
    const lastValue = form[last]
    const prevValue = validateRef.current.prev
    if (last && lastValue !== prevValue && validateRef.current[last]) {
      validateRef.current.prev = form[last]
      validate(last)
    }
  }, [form])

  const control = e => {
    const {name, dataset, value, textContent} = e.target
    validateRef.current.lastChange = name || dataset.name
    setForm({...form, [dataset.name || name]: value || textContent})
  }

  const reset = () => setForm(initialValue)

  const validate = name => {
    const result = validateRef.current[name].test(form[name])
    if (result) {
      setSuccess({...success, [name]: true})
      setError({...error, [name]: false})
    } else {
      setError({...error, [name]: true})
      setSuccess({...success, [name]: false})
    }
  }

  const register = (name, options = '') => {
    const {event = '', validate = ''} = options
    // console.log('opt:', name, event, validate)
    const attrs = {
      [event ? 'title' : 'name']: name,
      [event ? 'data-name' : 'id']: name,
      value: form[name],
      [event || 'onChange']: control,
    }

    if (validate) {
      validateRef.current[name] = validate
      attrs.error = error[name]
      attrs.success = success[name]
    }
    console.log({attrs})

    return attrs
  }

  return {form, register, control, reset, setForm, error, success}
}
