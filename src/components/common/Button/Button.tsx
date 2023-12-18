import { FC } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

interface ButtonProps {
  title: string;
  onClick: () => void;
  variant?: "highlight";
  className?: string;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  title,
  variant,
  className,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(
        styles.button,
        variant && variant === "highlight" && styles.highlight,
        className && className
      )}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
