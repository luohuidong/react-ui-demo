import React from "react";
import classnames from "classnames";

import styles from './index.module.scss'

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

interface BaseButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  href?: string;
}

export default function Button(props: BaseButtonProps) {
  const cs = classnames(styles.btn, {
    [styles[`btn-type-${props.type}`]]: true,
    [styles[`btn-size-${props.size}`]]: true,
    [styles[`btn-disable`]]: props.disabled
  });
  console.log("🚀 ~ file: index.tsx ~ line 34 ~ Button ~ cs", cs)

  if (props.type === ButtonType.Link) {
    return <a href={props.href || '#'}>{props.children}</a>;
  } else {
    return (
      <button className={cs} disabled={props.disabled}>
        {props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  type: ButtonType.Default,
  size: ButtonSize.Normal,
  disabled: false,
};
