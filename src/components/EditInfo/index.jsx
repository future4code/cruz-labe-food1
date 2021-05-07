import Input from "components/Input";
import { useForm } from "hooks";
import styles from "./styles.module.scss";

const EditInfo = () => {
  const { form, register } = useForm({ name: "", email: "", cpf: "" });
  return (
    <div className={styles.container}>
      <Input />
    </div>
  );
};
