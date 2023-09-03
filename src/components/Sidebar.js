import styles from "./Sidebar.module.scss";

const Sidebar = function () {
  return (
    <div className={styles.sidebar}>
      <button className={styles["nav-btn"]}></button>
    </div>
  );
};

export default Sidebar;
