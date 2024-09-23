import { CSSProperties, FC } from "react";
import cs from "classnames";
import styles from "./Button.module.scss";

export interface ButtonProps {
  text?: string;
  style?: CSSProperties;
  type?: "primary" | "danger" | "default";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { text = "Button", type = "default", onClick = () => {} } = props;

  const className = cs(styles.button, styles[type]);

  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  );
};
