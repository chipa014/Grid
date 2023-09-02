import HomeCard from "./HomeCard";

import styles from "./Homes.module.scss";

const Homes = function () {
  const homes = [
    {
      imgSrc: "house-1.jpeg",
      name: "Beautiful Family House",
      features: {
        location: "USA",
        rooms: "5 rooms",
        area: 325,
        price: "$1,200,000",
      },
    },
    {
      imgSrc: "house-2.jpeg",
      name: "Modern Glass Villa",
      features: {
        location: "Canada",
        rooms: "6 rooms",
        area: 450,
        price: "$2,750,000",
      },
    },
    {
      imgSrc: "house-3.jpeg",
      name: "Cozy Country House",
      features: {
        location: "UK",
        rooms: "4 rooms",
        area: 250,
        price: "$850,000",
      },
    },
    {
      imgSrc: "house-4.jpeg",
      name: "Large Rustic Villa",
      features: {
        location: "Portugal",
        rooms: "6 rooms",
        area: 480,
        price: "$1,950,000",
      },
    },
    {
      imgSrc: "house-5.jpeg",
      name: "Majestic Palace House",
      features: {
        location: "Germany",
        rooms: "18 rooms",
        area: 4230,
        price: "$9,500,000",
      },
    },
    {
      imgSrc: "house-6.jpeg",
      name: "Modern Family Apartment",
      features: {
        location: "Italy",
        rooms: "3 rooms",
        area: 180,
        price: "$600,000",
      },
    },
  ];

  return (
    <section className={styles.homes}>
      {homes.map((home) => (
        <HomeCard data={home} key={home.name} />
      ))}
    </section>
  );
};

export default Homes;
