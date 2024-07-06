import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
export default function Container({ children, classname = "", style, ...otherPropsContainer }) {
    return (
        <div className={classNames(styles.container, classname)} style={style} {...otherPropsContainer}>
            {children}
        </div>
    );
}
