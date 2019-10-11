import React from "react";
import ProjectCard from "components/ProjectCard";
import Divider from "legos/Divider";

import "./styles.scss";

const ProjectTypeGrid = (props) => {
    return (
        <React.Fragment>
            <Divider id="skills">Skills</Divider>
            <div className="c-ProjectTypeGrid">
                <ProjectCard theme="react" title="React">
                    TypeScript, Redux, Jest.
                </ProjectCard>

                <ProjectCard theme="js" title="Javascript" isInverted={true}>
                    Node, Express, and Mongo.
                </ProjectCard>

                <ProjectCard theme="css" title="HTML/CSS">
                    Responsive, adaptable layouts with grid, SASS, and BEM.
                </ProjectCard>
            </div>
        </React.Fragment>
    );
};

export default ProjectTypeGrid;
