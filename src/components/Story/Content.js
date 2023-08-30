import Heading2 from "../UI/Heading2";
import Heading3 from "../UI/Heading3";

import styles from "./Content.module.scss";
import margin from "../../helper.module.scss";

const Content = function () {
  return (
    <div className={styles.content}>
      <Heading3 className={margin.small}>Happy customers</Heading3>
      <Heading2 className={margin.medium} color="dark">
        &ldquo;The best decision of our lives&rdquo;
      </Heading2>
      <p className={`${styles.text} ${margin.large}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </p>
      <button className={styles.btn}>Find your own home</button>
    </div>
  );
};

export default Content;
