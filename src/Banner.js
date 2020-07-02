import React from 'react';
import {Row,Col} from 'react-bootstrap'
import NavBar from'./NavBar'
import Social from './Social.js'
function Banner(){
    return(
        <div className="Banner">
            <Row >
                <Col lg={6} md={12}>
                    <img className="Banner-img" src="../web1mirror.png"/>
                </Col>
                <Col lg={6} md={12}>
                        <div className="BannerTextBox">
                        <div>
                        <h3 className="BannerSubTitle" style={{marguTop:"25%"}}>HEY!</h3>
                        </div>
                        <div>
                        <h2 className="BannerTitle">I AM SARGAM MONGA</h2>
                        </div>
                        <div>
                        <h3 className="BannerSubTitle">A COMPUTER ENTHUSIAST</h3>
                        </div>
                        </div>
                        <div className="SocialIcons">
                        <a className="SocialLink" href="https://github.com/sargamm" style={{textDecoration:"none",color:"inherit"}}><i className="fa fa-github Social" /></a> 
                        <a className="SocialLink" href="https://github.com/sargamm" style={{textDecoration:"none",color:"inherit"}}><i className="fa fa-linkedin-square Social"/></a> 
                        <a className="SocialLink" href="https://github.com/sargamm" style={{textDecoration:"none",color:"inherit"}}><i className="fa fa-envelope Social"/></a> 
                        </div>
                </Col>
            </Row>
        </div>
    )
}
export default Banner