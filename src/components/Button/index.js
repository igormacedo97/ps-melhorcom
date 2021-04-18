import * as styles from './styles';

export default function Button () {
  return (
    <button style={styles.container}>
      <span style={styles.innerText}>Adicionar</span>  
    </button>
  )
}