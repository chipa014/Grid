import { Fragment } from "react";
import Heading4 from "../UI/Heading4";

import styles from "./Realtor.module.scss";

const Realtor = function (props) {
  const data = props.data;

  return (
    <Fragment>
      <img
        src={require(`../../resources/img/${data.src}`)}
        alt={`${data.name}, a realtor`}
        className={styles.img}
      />
      <div className={styles.details}>
        <Heading4 color="light">{data.name}</Heading4>
        <p className={styles.sold}>{data.housesSold} houses sold</p>
      </div>
    </Fragment>
  );
};

export default Realtor;
