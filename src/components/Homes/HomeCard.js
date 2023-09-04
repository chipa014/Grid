import { Fragment } from "react";
import Button from "../UI/Button";
import HomeFeature from "./HomeFeature";
import Icon from "../UI/Icon";
import styles from "./HomeCard.module.scss";

const HomeCard = function (props) {
  const data = props.data;
  const features = [
    { type: "location", iconName: "map-pin", text: data.features.location },
    { type: "rooms", iconName: "profile-male", text: data.features.rooms },
    {
      type: "area",
      iconName: "expand",
      text: (
        <Fragment>
          {data.features.area} m<sup>2</sup>
        </Fragment>
      ),
    },
    { type: "price", iconName: "key", text: data.features.price },
  ];
  return (
    <div className={styles.card}>
      <img
        src={require(`../../resources/img/${data.imgSrc}`)}
        alt={data.name}
        className={styles.img}
      />
      <Icon iconName="heart-full" className={styles["icon-like"]} />
      <h5 className={styles.name}>{data.name}</h5>
      {features.map((feature) => (
        <HomeFeature
          type={feature.type}
          iconName={feature.iconName}
          text={feature.text}
          key={feature.iconName}
        />
      ))}
      <Button className={styles.btn}>Contact realtor</Button>
    </div>
  );
};

export default HomeCard;
