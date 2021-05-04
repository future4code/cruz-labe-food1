import styles from "./styles.module.scss";

const Input = (props) => {
  return (
    <div className={styles.rectangle}>
      <label className={styles.label} for={props.name}>
        {props.label || "Textinho"}
      </label>
      <input className={styles.input} id={props.name} {...props} />
      <img className={styles.img} src={props.img} />
    </div>
  );
};

export default Input;
