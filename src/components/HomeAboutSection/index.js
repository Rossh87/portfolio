import React from "react";

// Get HOC to handle hover behavior on touch screens
import withHoverBehaviors from "hocs/withHoverBehaviors";

import "./styles.scss";

const HomeAboutSection = ({
    isHovered,
    HOCRef,
    handleMouseEnter,
    handleMouseLeave
}) => {
    const buildClassNames = () => {
        return isHovered ? "c-about s-is-hovered" : "c-about";
    };

    return (
        // ID added for navigation.  Ref is passed by HOC to manage hover
        // behaviors when mouse not in use.
        <section
            className={buildClassNames()}
            ref={HOCRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="c-about_text">
                <h1>Welcome! I'm Ross.</h1>
                <p>
                    I'm a web developer who's passionate about software that
                    rises to real-world challenges. I strive to write modular,
                    tested code that's easy to read and easy to change. Below
                    you'll find some projects I'm excited about right now.
                </p>
            </div>
        </section>
    );
};

export default withHoverBehaviors(HomeAboutSection);
