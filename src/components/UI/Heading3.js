import styles from "./Heading3.module.scss";

const Heading3 = function (props) {
  return (
    <h3 className={`${styles["heading-3"]} ${props.className}`}>
      {props.children}
    </h3>
  );
};

export default Heading3;
