import styles from "./Heading2.module.scss";

const Heading2 = function (props) {
  return (
    <h2
      className={`${styles["heading-2"]} ${styles[props.color]} ${
        props.className
      }`}
    >
      {props.children}
    </h2>
  );
};

export default Heading2;
