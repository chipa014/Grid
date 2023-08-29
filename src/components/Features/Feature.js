import Heading4 from "../UI/Heading4";
import Icon from "../UI/Icon";
import styles from "./Feature.module.scss";

const Feature = function (props) {
  const { icon, title, text } = props.data;
  return (
    <div className={styles.feature}>
      <Icon className={styles.icon} iconName={icon} />
      <Heading4 color="dark">{title}</Heading4>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Feature;
