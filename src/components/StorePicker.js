/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { getFunName } from '../helpers';

// import React, { Fragment } from 'react'; <Fragment>  asi o
// como esta ahora para que react lea varios tags or divs sino lee solo uno
class StorePicker extends React.Component {
  //1 event.preventDefault();// metodo previene sumit form
  //2 Get text from input ref={this.myInput}
  myInput = React.createRef();

  //asi tendria que poner un constructor, super y bind
  // para que this se leido tambien
  // goToStore(event){

  // }
  goToStore = (event) =>{
    //1 metodo previene sumit form
    event.preventDefault();
    //console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;

    //3 cambiar de pagina
    this.props.history.push(`/store/${ storeName }`);
  }
  render() {
    // console.log(this);
    //console.log(this.props);
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>please enter store</h2>
          <input type="text" required ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()}/>
          <button type="submit">Visit Store → </button>
        </form>
      </React.Fragment>
    );
  }
}
export default StorePicker;
