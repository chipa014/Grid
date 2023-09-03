import styles from "./NavItem.module.scss";

const NavItem = function (props) {
  return (
    <li className={styles["nav-item"]}>
      <button className={styles.link}>{props.item}</button>
    </li>
  );
};

export default NavItem;
