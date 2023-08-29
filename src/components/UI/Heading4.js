import styles from "./Heading4.module.scss";

const Heading4 = function (props) {
  return (
    <h4 className={`${styles["heading-4"]} ${styles[props.color]}`}>
      {props.children}
    </h4>
  );
};

export default Heading4;
