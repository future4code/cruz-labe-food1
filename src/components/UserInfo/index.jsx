import styles from "./styles.module.scss";

const UserInfo = (user) => {
  return (
    <div className={styles.container}>
      {user.name ? (
        <div className={styles.infoContainer}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.cpf}</p>
          <img
            className={styles.icon}
            src="icons/edit.svg"
            alt="Desenha de uma lápis para edição"
          />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default UserInfo;
