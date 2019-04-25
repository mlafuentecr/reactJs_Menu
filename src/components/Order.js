import React from 'react';
import { formatPrice } from '../helpers';
class Order extends React.Component {
  
  removeFish = (key) => {
    console.log(key);
    //this.props.deleteFish(key);
  }

  renderOrder = (key)=>{

    const fish = this.props.fishes[key];
    if(!fish) return null;  //**FishesTest // make sure fish is loaded

    const count= this.props.order[key];
    const isAvailable = fish.status === 'available';
    
    

    if(!isAvailable){
      return <li key={key} > Sorry {fish.name} is no longer available</li>;
    }else{
          return(
          <li key={key} >
            {count} lbs {fish.name}
            {formatPrice(count*fish.price)} {/* formatPrice viene de helper formatea el preio  */}
            {/* remove from order en una linea para pasarle el key */}
            <button onClick={() => this.props.deleteFishFromOrder(key)}>&times;</button>
          </li>
          )
    }
  }

  render() {
    const orderIds = Object.keys(this.props.order);
   //console.log(Object.keys(this.props.order));

   //reduce es como math
   const total = orderIds.reduce((preveTotal, key) => {

    const fish = this.props.fishes[key];
    const count= this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

      if(isAvailable){
        return preveTotal + (count * fish.price);
      }
      return preveTotal;

   }, 0); //start with 0

    return (
     <div className="order-wrap">
      <h2>Order</h2>
      <ul>
      {/* { orderIds.map(key => <li>{key}</li>) } asi o en funcion */}
      { orderIds.map(this.renderOrder) }
      </ul>
      <div className="total">
      Total:
      <strong> { formatPrice(total) }</strong>
      </div>
     </div>
    );
  }

}
export default Order;
