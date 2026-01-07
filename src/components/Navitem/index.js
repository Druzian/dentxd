import Styles from './navitem.module.css';

export default function Navitem({ label, link }) {
  return (
    <li className={Styles.navItem}>
      <a href={link} className={Styles.navLink}>
        {label}
      </a>
    </li>
  );
}
