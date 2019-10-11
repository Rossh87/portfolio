import React from "react";
import { withRouter } from "react-router";

// Local components
import NavLinkItem from "legos/NavLinkItem";
import Hamburger from "legos/Hamburger";

import "./styles.scss";

class Navbar extends React.Component {
    state = {
        isOpen: false
    };

    handleClick = (e) => {
        this.setState((prev) => {
            return {
                isOpen: !prev.isOpen
            };
        });

        window.scrollTo(0, 0);
    };

    getNavClasses = () => {
        return this.state.isOpen ? "c-nav s-is-open" : "c-nav";
    };

    render() {
        return (
            <div className="l-nav-anchor">
                <Hamburger handleClick={this.handleClick} />
                <nav className={this.getNavClasses()}>
                    <ul className="c-nav_menu e-hover-brackets">
                        <NavLinkItem
                            styleClass="c-nav_item"
                            isLinkComponent={true}
                            clickHandler={this.handleClick}
                            path={"/"}
                            hasHoverEffect
                        >
                            Home
                        </NavLinkItem>

                        <NavLinkItem
                            styleClass="c-nav_item"
                            isLinkComponent={false}
                            clickHandler={this.handleClick}
                            path={"#about"}
                            hasHoverEffect
                        >
                            About
                        </NavLinkItem>

                        <NavLinkItem
                            styleClass="c-nav_item"
                            isLinkComponent={false}
                            clickHandler={this.handleClick}
                            path={"https://github.com/Rossh87/portfolio"}
                            hasHoverEffect
                        >
                            Source
                        </NavLinkItem>

                        <NavLinkItem
                            styleClass="c-nav_item"
                            isLinkComponent={false}
                            clickHandler={this.handleClick}
                            path={"#contact"}
                            hasHoverEffect
                        >
                            Contact
                        </NavLinkItem>
                    </ul>
                </nav>
            </div>
        );
    }
}

// To facilitate sticky positioning, the Navbar component will live outside
// the <Router> provider, so we add router functionality with a HOC
export default withRouter(Navbar);
