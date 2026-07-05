import styles from "./Button.module.css";

const Button = ({ children, className, wrapperClassName, ...props }) => {
  return (
    <div
      className={
        wrapperClassName
          ? `${styles.buttonLineWrapper} ${wrapperClassName}`
          : styles.buttonLineWrapper
      }
    >
      <button
        className={className ? `${styles.button} ${className}` : styles.button}
        {...props}
      >
        {children}
      </button>
      <div className={styles.buttonLine}></div>
    </div>
  );
};

export default Button;
