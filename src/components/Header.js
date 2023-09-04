import Button from "./UI/Button";
import Heading1 from "./UI/Heading1";
import Heading3 from "./UI/Heading3";
import styles from "./Header.module.scss";

const Header = function () {
  const seenOnLogos = [
    { src: "bbc", name: "BBC" },
    { src: "forbes", name: "Forbes" },
    { src: "techcrunch", name: "TechCrunch" },
    { src: "bi", name: "Business Insider" },
  ];
  return (
    <header className={styles.header}>
      <img
        src={require("../resources/img/logo.png")}
        alt="nexter logo"
        className={styles.logo}
      />
      <Heading3>Your own home</Heading3>
      <Heading1>The ultimate personal freedom</Heading1>
      <Button className={styles.btn}>View our properties</Button>
      <div className={styles["seen-on__text"]}>Seen on</div>
      <div className={styles["seen-on__logos"]}>
        {seenOnLogos.map((company) => (
          <img
            src={require(`../resources/img/logo-${company.src}.png`)}
            alt={`Seen on ${company.name}`}
            key={company.src}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
