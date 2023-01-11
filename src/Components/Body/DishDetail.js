import React from "react";
import { Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText} from "reactstrap";
import LoadComment from "./LoadComment";


const DishDetail = (props) =>{
    return(
        <div>
            <Card style={{padding:"25px",marginTop:"30px",backgroundColor:"skyblue"}}>
                <CardImg width="100%" src={props.dish.image} alt={props.dish.name}/>
                <CardBody>
                    <CardTitle>
                        <p>Item Name :{props.dish.name}</p>
                        <p>OverView :{props.dish.description}</p>
                        <p>Cetegroy :{props.dish.category}</p>
                        <p>Lebel :{props.dish.label}</p>
                        <p>Price :{props.dish.price}/-</p>

                        <hr/>
                        <LoadComment comments={props.dish.comments}/>

                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}



export default DishDetail