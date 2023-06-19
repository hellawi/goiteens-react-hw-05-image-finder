import styles from './Button.module.css'
function Button({ onClick }) {
  return (
    <div>
        <button className={styles.button} onClick={onClick}>Load More</button>
    </div>
  )
}
export default Button