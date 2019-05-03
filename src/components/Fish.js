import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';


class Fish extends React.Component {
  // detalle es un objeto pero PropTypes
  // ocupa algo mas definido entonces se usa shape
  static propTypes = {
    addToOrder : PropTypes.func,
      detalle:  PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price:  PropTypes.number
    }),
    
  }
handleClick = () => {
  this.props.addToOrder(this.props.index);
}
  render() {
    // console.log(this.props);
    // console.log(this.props.detalle.name);
    const {image, name, price, desc, status} = this.props.detalle;
   let isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
         <p>{desc}</p>
         <button  disabled={ !isAvailable } onClick={this.handleClick}>
          {isAvailable ? 'Add to Order' : 'Sold Out!'}
          </button>
      </li>
    );
  }
}
export default Fish;
