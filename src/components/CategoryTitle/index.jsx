import styles from "./styles.module.scss";

const CategoryTitle = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

export default CategoryTitle;
