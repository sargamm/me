import React from 'react';
import ProjectCard from './ProjectCard.js';
import {Row,Col,Button, Card, Nav, Container} from 'react-bootstrap'

function handleEvent(){
    console.log("click")
    let projectOverlay=document.getElementById("overlay");
    console.log(projectOverlay)
    console.log(projectOverlay.style)
    // projectOverlay.style.opacity="0";
    // projectOverlay.style.zIndex="0"
    projectOverlay.style.display="none"
    console.log("clicked")
}
function Projects(){
    return(
        <div className="Projects">
            <div className="ProjectsDiv">
                <Row>
                 <Col lg={3} md={6} sm={12}>
                    <div>
                        <Row>
                        <ProjectCard width="30%" title="Multi User Chat System" image="../linux.jpg"/>
                        <ProjectCard width="59%" title="Sort Visualiser" image="sortv2.png"/>
                        </Row>
                        <Row>
                        <ProjectCard width="100%" title="VacciCure" image="../Vaccicure.jpg"/>
                        </Row>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div>
                        <Row>
                        <ProjectCard width="100%" title="Smart Mirror" image="../smartmirror.jpg"/>
                        </Row>
                        <Row>
                        <ProjectCard width="30%" title="Basic Linux Shell" image="../linux.jpg"/>
                        <ProjectCard width="59%" title="Board Result Analysis" image="../BoardResult.jpg"/>
                        </Row>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div>
                        <Row>
                        <ProjectCard width="30%" title="KMaps Reduction" image="../kmap.jpg" />
                        <ProjectCard width="59%" height="100%" title="Transforming Chandelier" image="../chandelier2.jpg"/>
                        </Row>
                        <Row>
                        <ProjectCard width="100%" title="Plants Vs Zombies" image="../pvz.jpeg"/>
                        </Row>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div>
                        <Row>
                        <ProjectCard width="100%" title="Cyc-Glove" image="../glove.JPG"/>
                        </Row>
                        <Row>
                        <ProjectCard width="30%" title="Multiple Reader Writer System" image="../linux.jpg"/>
                        <ProjectCard width="59%"title="Portfolio" image="../croppedgam.png"/>
                        </Row>
                    </div>
                </Col>
                </Row>
                
            </div>
        </div>
    )
}
export default Projects
