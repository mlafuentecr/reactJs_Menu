import  React   from  'react';
import  Header  from  './Header';
import  Order   from  './Order';
import  Inventory   from  './Inventory';
import sampleFishes from '../sample-fishes'; //minuscula cuando no es class
import Fish from './Fish';


class App extends React.Component {

  //1 Creo un objeto state
  state = {
    fishes:{},
    order:{}
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

      <Order />
      <Inventory
      addFish={this.addFish}
      loadExamples={this.loadExamples}
      />

    </div>

    );
  }
}
export default App;

