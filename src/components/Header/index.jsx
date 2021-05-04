import styles from "./styles.module.scss";

const Header = ({ title, showArrow, showLogo }) => {
  return (
    <header className={styles.container}>
      {showArrow && (
        <img
          className={styles.arrowBack}
          src="/icons/back.svg"
          alt="Seta para voltar"
        />
      )}
      <h1 className={styles.title}>{title}</h1>
      {showLogo && (
        <img
          className={styles.logo}
          src="/icons/logo.svg"
          alt="Imagem com texto escrito Rappi4 com letras grandes"
        />
      )}
    </header>
  );
};

export default Header;
