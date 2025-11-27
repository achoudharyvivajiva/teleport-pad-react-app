import React, { type ButtonHTMLAttributes } from "react";
import { Icon, StyledButton } from "./Button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  src?: string;
  hasIcon?: boolean;
  color?: string;
  bgcolor: string;
  iconWidth?: number;
  iconHeight?: number;
  border?: string;
  padding?: string;
  width?: string;
}

const Button = ({
  children,
  src,
  hasIcon,
  bgcolor,
  color,
  iconHeight,
  iconWidth,
  border,
  padding,
  width,
  ...rest
}: Props) => {
  return (
    <StyledButton
      bgcolor={bgcolor}
      color={color ?? "#FFFFFF"}
      border={border ?? "none"}
      padding={padding ?? "15px"}
      width={width ?? ""}
      {...rest}
    >
      {hasIcon && src && (
        <Icon
          src={src}
          alt={children?.toString()}
          width={iconWidth ?? 16}
          height={iconHeight ?? 16}
        />
      )}
      {children}
    </StyledButton>
  );
};

export default Button;
