import logo from './logo.png';
import * as styles from './styles';


export default function Header () {
  return (
    <header style={styles.header}>
      <img src={logo} alt="Ps Melhorcom" />
    </header>
  )
}