import styles from "./Gallery.module.scss";

const Gallery = function () {
  const numOfImages = 14;
  const range = [...Array(numOfImages).keys()];
  return (
    <section className={styles.gallery}>
      {range.map((i) => (
        <figure
          className={`${styles.item} ${styles[`item--${i + 1}`]}`}
          key={i}
        >
          <img
            src={require(`../../resources/img/gal-${i + 1}.jpeg`).default}
            alt="House"
            className={styles.img}
          />
        </figure>
      ))}
    </section>
  );
};

export default Gallery;
