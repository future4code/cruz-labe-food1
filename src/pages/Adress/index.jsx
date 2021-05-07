import styles from "./styles.module.scss";
import BottomTabNav from "components/BottomTabNav";
import Input from "components/Input";
import Header from "components/Header";
import Button from "components/Button";
import { useGo, useForm } from "hooks";
import api from "services/api";

const Adress = () => {
  const go = useGo();
  const { form, register, control, reset } = useForm({ text: "" });

  const handleAdress = async (e) => {
    e.preventDefault();
    //validade
    const r = await api.address(form);
    console.log(r);
    go.home();
  };

  return (
    <div className={styles.container}>
      <Header title="Meu Endereço" showArrow bottom />
      <form className={styles.form} onSubmit={handleAdress}>
        <Input
          type="text"
          label="Logradouro*"
          placeholder="Rua / Av."
          {...register("street")}
        />
        <Input
          type="text"
          label="Número*"
          placeholder="Número"
          {...register("number")}
        />
        <Input
          type="text"
          label="Complemento*"
          placeholder="Apto. / Bloco"
          {...register("complement")}
        />
        <Input
          type="text"
          label="Bairro"
          placeholder="Bairro"
          {...register("neighbourhood")}
        />
        <Input
          type="text"
          label="Cidade*"
          placeholder="City"
          {...register("city")}
        />
        <Input
          type="text"
          label="Estado*"
          placeholder="Estado"
          {...register("state")}
        />
        <Button label="Salvar" />
      </form>
      <BottomTabNav />
    </div>
  );
};

export default Adress;
