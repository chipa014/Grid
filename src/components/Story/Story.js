import { Fragment } from "react";
import styles from "./Story.module.scss";

const Story = function () {
  return (
    <Fragment>
      <div className={styles.pictures}>Pictures</div>
      <div className={styles.content}>Content</div>
    </Fragment>
  );
};

export default Story;
