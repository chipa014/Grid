import NavItem from "./NavItem";
import styles from "./Footer.module.scss";

const Footer = function () {
  const navItems = [
    "Find your dream home",
    "Request proposal",
    "Download home planner",
    "Contact us",
    "Submit your property",
    "Come work with us!",
  ];
  return (
    <footer className={styles.footer}>
      <ul className={styles.nav}>
        {navItems.map((item) => (
          <NavItem item={item} key={item} />
        ))}
      </ul>
      <p className={styles.copyright}>
        Built by Alexander Trushin as an exercise is Jonas Schmedtmann's
        "Advanced CSS and Sass" course. Design by Jonas Schmedtmann. Copyright
        &copy; 2017 Jonas Schmedtmann.
      </p>
    </footer>
  );
};

export default Footer;
