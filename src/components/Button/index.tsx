import React from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

export enum ButtonSize {
  Normal = "normal",
  Large = "large",
  Small = "small",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps extends Partial<React.HtmlHTMLAttributes<HTMLButtonElement>> {
  children: string;
  type: ButtonType;
  size: ButtonSize;
  disabled: boolean;
  href?: string;
} 

export default function Button({
  children,
  type,
  size,
  href,
  disabled,
  className,
  ...restProps
}: BaseButtonProps ) {
  console.log('test', `btn-type-${type}`, styles[`btn-type-${type}`])

  const cs = classnames(className, {
    [styles[`btn-type-${type}`]]: true,
    [styles[`btn-size-${size}`]]: true,
    [styles[`btn-disable`]]: disabled,
  });

  return (
    <button className={cs} disabled={disabled} {...restProps}>
      {type === ButtonType.Link && href ? (
        <a href={href} target="_blank" rel='noreferrer'>
          <span>{children}</span>
        </a>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
}

Button.defaultProps = {
  type: ButtonType.Default,
  size: ButtonSize.Normal,
  disabled: false,
};
