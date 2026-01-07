import Styles from './navbar.module.css';
import Navitem from '../Navitem';

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <ul className={Styles.navList}>
        <Navitem label="Agende sua avaliação" link="#aval" />
        <Navitem label="Tratamentos" link="#tratamentos" />
        <Navitem label="Clínicas" link="#clinicas" />
        <Navitem label="Sobre nós" link="#sobre" />
      </ul>
    </nav>
  );
}