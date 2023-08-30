import styles from "./Pictures.module.scss";

const Pictures = function () {
  return (
    <div className={styles.pictures}>
      <img
        className={styles["img--1"]}
        src={require("../../resources/img/story-1.jpeg").default}
        // src="../../resources/img/story-1.jpeg"
        alt="Couple with their new house"
      />
      <img
        className={styles["img--2"]}
        src={require("../../resources/img/story-2.jpeg").default}
        alt="New house"
      />
    </div>
  );
};

export default Pictures;
