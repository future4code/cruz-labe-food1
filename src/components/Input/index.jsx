import styles from "./styles.module.scss";

const Input = ({ label, name, img, showPassword, ...args }) => {
  return (
    <div className={styles.rectangle}>
      <label className={styles.label} htmlFor={name}>
        {label && label}
      </label>

      <input className={styles.input} id={name} name={name} {...args} />

      {img && <img onClick={showPassword} className={styles.img} src={img} alt={name} />}
    </div>
  );
};

export default Input;
