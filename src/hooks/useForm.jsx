import {useEffect} from 'react'
import {useRef} from 'react'
import {useState} from 'react'

export const useForm = initialValue => {
  const [form, setForm] = useState(initialValue)
  const [error, setError] = useState({})
  const [success, setSuccess] = useState(initialValue)
  const validateRef = useRef({})
  const maskRef = useRef({})

  useEffect(() => {
    const last = validateRef.current.lastChange
    if (!last) return
    const lastValue = form[last]
    const prevValue = validateRef.current.prev
    if (last && lastValue !== prevValue && validateRef.current[last]) {
      validateRef.current.prev = form[last]
      validate(last)
    }
  }, [form])

  const verifyAll = () => {
    let some
    let errors = {...error}

    // verify empty fields
    for (let name in form) {
      if (!form[name]) {
        errors = {...errors, [name]: true}
        some = true
      }
    }

    // verify erros in all fields
    for (let name in error) {
      if (error[name]) some = true
    }

    setError({...errors})

    return some
  }

  const verifyErrors = () => {
    let some
    for (let name in error) {
      if (error[name]) some = true
    }
    return some
  }

  const formatMask = name => {
    const mask = maskRef.current[name]
    for (let char of mask) {
      console.log(mask[char])
    }
  }

  const control = e => {
    const {name, dataset, value, textContent} = e.target
    validateRef.current.lastChange = name || dataset.name
    console.log(maskRef)
    if (Object.values(maskRef.current).includes(name)) {
      console.log(maskRef.current[name])
    }
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
    const {event = '', validate = '', mask = ''} = options
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

    if (mask) {
      maskRef.current[name] = {
        mask,
        el: false,
      }
      attrs.ref = el => {
        maskRef.current[name].el = el
      }
    }

    return attrs
  }

  const changed = () => {
    let some
    for (let name in form) {
      if (form[name] !== initialValue[name]) some = true
    }
    return some
  }

  return {
    form,
    register,
    control,
    reset,
    setForm,
    error,
    setError,
    success,
    verifyAll,
    verifyErrors,
    changed,
  }
}
