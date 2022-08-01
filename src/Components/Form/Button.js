import styles from './Button.module.css'

 const Button = ({Children, ...props}) => {
  return (
    <div>
      <button {...props} className={styles.button}>{Children}</button>
    </div>
  )
}
export default Button