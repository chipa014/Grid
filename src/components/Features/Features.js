import Feature from "./Feature";
import styles from "./Features.module.scss";

const Features = function () {
  const features = [
    {
      icon: "global",
      title: "World's best luxury homes",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "trophy",
      title: "Only the best properties",
      text: "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
    },
    {
      icon: "map-pin",
      title: "All homes in top location",
      text: "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
    },
    {
      icon: "key",
      title: "New home in one week",
      text: "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "presentation",
      title: "Top 1% realtors",
      text: "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "lock",
      title: "Secure payments on XXX",
      text: "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.",
    },
  ];
  return (
    <section className={styles.features}>
      {features.map((feature) => (
        <Feature data={feature} key={feature.icon} />
      ))}
    </section>
  );
};

export default Features;
