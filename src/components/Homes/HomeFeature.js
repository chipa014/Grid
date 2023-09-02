import Icon from "../UI/Icon";

import styles from "./HomeFeature.module.scss";

const HomeFeature = function (props) {
  return (
    <div className={`${styles.feature} ${styles[props.type]}`}>
      <Icon className={styles.icon} iconName={props.iconName} />
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default HomeFeature;
