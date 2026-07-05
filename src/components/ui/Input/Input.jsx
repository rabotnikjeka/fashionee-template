import styles from "./Input.module.css";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={className ? `${styles.input} ${className}` : styles.input}
      {...props}
    />
  );
};

export default Input;
