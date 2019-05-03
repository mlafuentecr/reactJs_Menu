import React from 'react';
import PropTypes      from 'prop-types';

class EditFishForm extends React.Component {

  static propTypes = {
      fish: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.string,
        price:  PropTypes.number
      }),
      index:  PropTypes.string,
      updateFish: PropTypes.func

  }

  handleChange = (event) =>{

    const updateFish =  {
      //1. take copy current fish
      ...this.props.fish,
      //2 cambiamos lo que se actualizo
      [event.currentTarget.name]: event.currentTarget.value
    };

      //Ipdate the props function that is defines in app
   this.props.updateFish(this.props.index, updateFish );
    //console.log(this.props.index);
    // console.log('change'+event.currentTarget.value);
    // console.log('updateFish'+ JSON.stringify(updateFish));
  }
removeFish = () => {
  this.props.deleteFish(this.props.index);
}


  render() {

    return (
      <div className="fish-edit">
        <input  type='text' name='name'  onChange={this.handleChange} value={this.props.fish.name}/>
        <input  type='text' name='price' onChange={this.handleChange} value={this.props.fish.price}/>

        <select type='text' name="status" onChange={this.handleChange}  value={this.props.fish.status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" onChange={this.handleChange}  value={this.props.fish.desc}/>
        <input  type='text' name='image'  onChange={this.handleChange}  value={this.props.fish.image}/>
        <button onClick={this.removeFish} >Remove Fish</button>
      </div>
    );
  }
}



export default EditFishForm;
