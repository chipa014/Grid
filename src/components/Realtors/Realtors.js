import Heading3 from "../UI/Heading3";
import Realtor from "./Realtor";

import styles from "./Realtors.module.scss";

const Realtors = function () {
  const realtors = [
    { name: "Eric Feinman", housesSold: 245, src: "realtor-1.jpeg" },
    { name: "Kim Brown", housesSold: 212, src: "realtor-2.jpeg" },
    { name: "Toby Ramsey", housesSold: 198, src: "realtor-3.jpeg" },
  ];
  return (
    <div className={styles.realtors}>
      <Heading3>Top 3 realtors</Heading3>
      <div className={styles.list}>
        {realtors.map((realtor) => (
          <Realtor data={realtor} />
        ))}
      </div>
    </div>
  );
};

export default Realtors;
