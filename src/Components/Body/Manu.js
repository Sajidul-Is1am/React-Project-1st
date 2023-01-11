import React, { Component } from "react";
import DISHES from "../data/dishes";
import ManuItem from "./ManuItem";
import DishDetail from "./DishDetail";



class Manu extends Component{
    state={
        dishes:DISHES,
        selectedDish:null
    }

    OnDishSelected = (dish) =>{
        console.log(this.OnDishSelected)
        this.setState({selectedDish:dish})
    }

    render(){
        const manu = this.state.dishes.map(item =>{
           return(
            <ManuItem
            dish={item}
            key ={item.id}
            Dishselect ={()=>this.OnDishSelected(item)}
            />
           )
        })

        let dishDtails = null;
        if(this.state.selectedDish != null){
            dishDtails = <DishDetail dish ={this.state.selectedDish}/> 
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {manu}
                    </div>
                    <div className="col-6">
                        {dishDtails}
                    </div>
                </div>
            </div>

        )
    }
}

export default Manu;