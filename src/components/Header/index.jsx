import classNames from "classnames";
import useGo from "hooks/useGo";
import styles from "./styles.module.scss";

const Header = ({ title, showArrow, showLogo, bottom }) => {
  const go = useGo();
  const c = classNames;
  // go.home()
  // go.back()
  // go.login()
  // onClick={go.home}

  return (
    <header className={styles.container}>
      <div
        className={
          showArrow
            ? c(styles.titleContainer, styles.titleContainerBorder)
            : styles.titleContainer
        }
      >
        {showArrow && (
          <img
            className={styles.arrowBack}
            src="/icons/back.svg"
            alt="Seta para voltar"
            onClick={go.back}
          />
        )}

        {!showLogo && !bottom && (
          <h1 className={c(styles.title, styles.titleContainerBorder)}>
            {title}
          </h1>
        )}
      </div>

      {showLogo && (
        <>
          <img
            className={styles.logo}
            src="/icons/logo.svg"
            alt="Imagem com texto escrito Rappi4 com letras grandes"
          />
          <h1 className={styles.title}>{title}</h1>
        </>
      )}
      {bottom && <h1 className={c(styles.title, styles.margin)}>{title}</h1>}
    </header>
  );
};

export default Header;
