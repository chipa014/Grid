import styles from "./Heading1.module.scss";

const Heading1 = function (props) {
  return (
    <h1 className={`${styles["heading-1"]} ${props.className}`}>
      {props.children}
    </h1>
  );
};

export default Heading1;
