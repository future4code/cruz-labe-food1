import styles from "./styles.module.scss";

const UserAdress = ({ address, title }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}> {title}</p>
      <p>{address}</p>
      <img
        className={styles.icon}
        src="/icons/edit.svg"
        alt="Desenha de um lápis para edição"
      />
    </div>
  );
};

export default UserAdress;
