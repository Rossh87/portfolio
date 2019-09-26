import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

// Parent component can pass a 'styleClass' prop that will be added to the <li> returned as its
// CSS class.  In addition, boolean prop 'hasHoverEffect' adds preset class names that add a corner
// border on mouseover.
const NavLinkItem = ({
    clickHandler,
    styleClass,
    isLinkComponent,
    path,
    children,
    hasHoverEffect
}) => {
    const liClasses = hasHoverEffect
        ? `${styleClass} e-hover-brackets_li`
        : styleClass;

    const anchorClasses = hasHoverEffect
        ? "c-sub-link_item e-hover-brackets_anchor"
        : "c-sub-link_item";

    const determineLinkType = () => {
        return isLinkComponent ? (
            <Link className={anchorClasses} onClick={clickHandler} to={path}>
                {children}
            </Link>
        ) : (
            <a className={anchorClasses} href={path} onClick={clickHandler}>
                {children}
            </a>
        );
    };

    return <li className={liClasses}>{determineLinkType()}</li>;
};

export default React.memo(NavLinkItem);
