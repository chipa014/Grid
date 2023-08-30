import { Fragment } from "react";
import Content from "./Content";
import Pictures from "./Pictures";
import styles from "./Story.module.scss";

const Story = function () {
  return (
    <Fragment>
      <Pictures />
      <Content />
    </Fragment>
  );
};

export default Story;
