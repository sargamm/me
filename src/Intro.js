import React from 'react';
import {Row, Col} from 'react-bootstrap'
function Intro(){
    return(
        <div className="Intro">
            <Row>
                <Col sm={12}>
                <div className="IntroTextBox">
                    <p> Eversince I was a kid, I have been into creating and exploring. 
                        Back then, I started creating art pieces, exploring techniques and now computer science gives me
                        that sense of creation and a domain where I can explore endlessly.
                        Currently, I am pursuing my Bachelors of Technology from Indraprastha Institute of Information Technolgy, New Delhi 
                        in Computer Science and Applied Mathematics. I call myself a computer enthusiast 
                        exploring and experimenting with ideas, oppurtunities and concepts. </p>
                </div>
                </Col>
                {/* <Col sm={1} className="sidebar">
                <p></p>
                </Col> */}
            </Row>
        </div>
    )
}
export default Intro