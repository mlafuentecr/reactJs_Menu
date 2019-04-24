import React from 'react';

class EditFishForm extends React.Component {
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
     
      </div>
    );
  }
}
export default EditFishForm;