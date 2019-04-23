import  React   from  'react';
import  Header  from  './Header';
import  Order   from  './Order';
import  Inventory   from  './Inventory';
import sampleFishes from '../sample-fishes'; //minuscula cuando no es class
import FishItem from './FishItem';

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
  render() {
    return (

    <div className="catch-of-the-day">

      <div className="menu">
        <Header tagline='mario is cool' age={43} cool={true} />
        <ul className="fishes">
          {Object.keys(this.state.fishes).map(key => <FishItem key={key} />)} 
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

