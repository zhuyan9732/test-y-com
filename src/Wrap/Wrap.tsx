import { FC } from "react";
import cs from "classnames";

export interface WrapProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Wrap: FC<WrapProps> = ({ children, className, style }) => {
  return (
    <div className={cs(className)} style={style}>
      {children}
    </div>
  );
};
