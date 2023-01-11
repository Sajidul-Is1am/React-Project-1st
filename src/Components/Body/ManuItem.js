import React from "react";
import { Card,CardBody,CardImg,CardImgOverlay,CardTitle } from "reactstrap";


const ManuItem = (props) =>{
    return(
        <div>
            <Card>
                <CardImg width="100%" src={props.dish.image} alt={props.dish.name} style={{opacity:"0.5"}}/>
                <CardBody>
                    <CardImgOverlay>
                        <CardTitle style={{cursor:"pointer"}} onClick={props.Dishselect}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
                
            </Card>
        </div>
    )
}



export default ManuItem;
