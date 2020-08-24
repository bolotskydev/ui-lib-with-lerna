import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Loader from "./loader.inline.svg";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);
export const Button = (props) => {
  const {
    className,
    tag = "button",
    type = "button",
    disabled,
    size,
    theme,
    cursor,
    children,
    shape,
    isLoading = false,
    gatsbyLinkComponent: Link,
    ...attributes
  } = props;

  const buttonClassName = cx(
    { themeDefault: !theme },
    { themeAdditional: theme === "additional" },
    { themeTransparent: theme === "transparent" },
    { themeGradientPrimary: theme === "gradient-primary" },
    { themeGradientSecondary: theme === "gradient-secondary" },
    { sizeMd: !size },
    { sizeLg: size === "lg" },
    { sizeSm: size === "sm" },
    { round: shape === "round" },
    { disabled: disabled === true },
    className
  );

  const innerContent = (
    <>
      {theme === "gradient-primary" || theme === "gradient-secondary" ? (
        <>
          <span className={styles.border}>
            <span className={styles.borderInner}>
              <span className={styles.borderInnerSpace} />
              <span className={styles.borderInnerGradient} />
            </span>
          </span>

          <span className={styles.blur}>
            <span className={styles.blurInner}>
              <span className={styles.blurInnerSpace} />
              <span className={styles.blurInnerGradient} />
            </span>
          </span>
          <span className={styles.fill} />
          <span className={styles.text}>
            {children}
            {cursor && (
              <>
                {/* No-break space and > */}
                &nbsp;&gt;
                <span className={styles.cursor}>_</span>
              </>
            )}
          </span>
        </>
      ) : (
        <>
          {isLoading && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
          <span className={styles.buttonContent}>
            {children}
            {cursor && (
              <>
                {/* No-break space and > */}
                &nbsp;&gt;
                <span className={styles.cursor}>_</span>
              </>
            )}
          </span>
        </>
      )}
    </>
  );

  switch (tag) {
    case "a":
      return (
        <a className={buttonClassName} {...attributes}>
          {innerContent}
        </a>
      );
    case "link":
      return (
        <Link className={buttonClassName} {...attributes}>
          {innerContent}
        </Link>
      );
    case "button":
    default:
      return (
        <button
          className={buttonClassName}
          type={type}
          disabled={disabled}
          {...attributes}
        >
          {innerContent}
        </button>
      );
  }
};

Button.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(["button", "link", "a"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["lg", "sm", undefined]),
  theme: PropTypes.oneOf([
    undefined,
    "additional",
    "transparent",
    "gradient-primary",
    "gradient-secondary",
  ]),
  cursor: PropTypes.bool,
  children: PropTypes.node,
  shape: PropTypes.oneOf([undefined, "round"]),
  isLoading: PropTypes.bool,
  gatsbyLinkComponent: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  tag: "button",
  type: "button",
  disabled: false,
  size: undefined,
  theme: undefined,
  cursor: false,
  children: undefined,
  shape: undefined,
  isLoading: false,
  gatsbyLinkComponent: () => {},
};
