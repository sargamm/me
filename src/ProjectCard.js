import React, { Component,useState } from 'react';
import {Image, Button ,Collapse} from 'react-bootstrap'

function ProjectCard(props){
    const [open, setOpen] = useState(false);
    return(
        <>
        <div className="ProjectCard" style={{width: props.width, height: props.height}} >
            <Image src={props.image} className="CardImage" />
            <a href={props.link}><div className="overlay" onClick={() => setOpen(!open)} aria-controls="collapse-text"
        aria-expanded={open} >
                <div className="CardText">{props.title}</div>
            </div></a>
        </div>
        <Collapse in={open}>
        <div id="collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
        </>
    )
}
export default ProjectCard