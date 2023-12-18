import { FC } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

interface ButtonProps {
  title: string;
  onClick: () => void;
  variant?: "highlight";
  className?: string;
}

const Button: FC<ButtonProps> = ({ title, variant, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classnames(
        styles.button,
        variant && variant === "highlight" && styles.highlight,
        className && className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
