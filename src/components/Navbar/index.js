import Styles from './navbar.module.css';
import Navitem from '../Navitem';
import Logo from '../Logo';

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navContainer}>
      <Logo />
        <ul className={Styles.navList}>
          <Navitem label="Agende sua avaliação" link="#aval" />
          <Navitem label="Tratamentos" link="#tratamentos" />
          <Navitem label="Clínicas" link="#clinicas" />
          <Navitem label="Sobre nós" link="#sobre" />
        </ul>
      </div>
    </nav>
  );
}