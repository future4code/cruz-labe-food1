import { useState } from "react";

// form.login
// form.password
// form.search
// form.adress
// form.name
// form.cpf

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const control = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const reset = () => setForm(initialValue);

  const register = (name) => ({
    name,
    id: name,
    value: form[name],
    onChange: control,
  });
  const submit = () => {};

  return { form, register, control, reset };
};

export default useForm;
