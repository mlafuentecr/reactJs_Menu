import React        from  'react';
import PropTypes    from 'prop-types';
import Header       from  './Header';
import Order        from  './Order';
import Inventory    from  './Inventory';
import sampleFishes from  '../sample-fishes'; //minuscula cuando no es class
import Fish         from  './Fish';
import base         from  '../base';


class App extends React.Component {


  //1 Creo un objeto state
  state = {
    fishes:{},
    order:{}
  }
  static propType = {
    match:  PropTypes.Object
  };

  componentDidMount() {
    //reInstate local storage
    const localStorageOrder = localStorage.getItem(this.props.match.params.storeId);
    //console.log(localStorageOrder);

    //Si tengo algo en memoria de esta tienda
    //saque el string conviertalo en obj y metalo a orders

    if(localStorageOrder){
      //esto da un error porque no hay fishes cargados aun los carga de firebase
      //entonces en order.js meto un si no hay fishes = null Buscar **FishesTest
      this.setState({
        order: JSON.parse(localStorageOrder)
      });

    }

    // mando el parametro y un /variableName y le digo que duplique state fishes
    this.fishesRef = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
    });

      //la order no se carga hasta cuando le doy add to order
}
componentDidUpdate(){

  localStorage.setItem(
    //Usa el nombre de la tienda y despues la orden que llevamos la almacena en string por eso es string gify
      this.props.match.params.storeId, JSON.stringify(this.state.order)
  );

}

componentWillUnmount(){
  //si el usuario sale desmonte el firebase
  base.removeBinding(this.fishesRef);
}

  //2 creo un metodo que agarra fish
  addFish = (fish) => {

    //console.log('fish anadido');
    // 1. Copy STATE obj
    const fishes ={...this.state.fishes};
    // 2. add new fish
    fishes[`fish${Date.now()}`] = fish;

    //3. set the new fishes object to state
    this.setState(
      { fishes: fishes }
    );
  }

updateFish = (key, updateFish) => {
  // 1. take a copy current Fish
  const fishes = {...this.state.fishes};
  // 2. update the state
  fishes[key] = updateFish;
  // 3. set that to state
  this.setState({ fishes : fishes });

}
deleteFish = ( key ) => {
  // 1. take a copy current Fish
  const fishes = {...this.state.fishes};
  // 2. update the state fierebase ocupa null
  fishes[key] = null;
  // 3. set that to state
  this.setState({ fishes : fishes });

}
deleteFishFromOrder = ( key ) => {
  // 1. take a copy current Fish
  const order = {...this.state.order};
  // 2. remove item 
  delete order[key];
  // 3. set that to state
  this.setState({ order : order });

}

  loadExamples = () => {
    this.setState(
    { fishes: sampleFishes}
    );
  }

  addToOrder = (key) => {
    //1. take a copy of state
    const order = {...this.state.order}
    // 2. add order or update the number // si order1 existe sumele otra If sino es 1
    order[key] = order[key] + 1 || 1;

    //3. call set state to update state object
  this.setState(
    {order : order}
  );

  }



  render() {
    return (

    <div className="catch-of-the-day">

      <div className="menu">
        <Header tagline='Fresh Market' age={43} cool={true} />
        <ul className="fishes">
          {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} detalle={this.state.fishes[key]} addToOrder={this.addToOrder}  />)}
          {/*es como n loop de objeto */}
        </ul>
      </div>

      <Order fishes={this.state.fishes} order={this.state.order}  deleteFishFromOrder = {this.deleteFishFromOrder} />
      <Inventory
      addFish       = {this.addFish}
      updateFish    = {this.updateFish}
      loadExamples  = {this.loadExamples}
      fishes        = {this.state.fishes}
      deleteFish    = {this.deleteFish}
      storeId       = {this.props.match.params.storeId}
      />

    </div>

    );
  }
}
export default App;

