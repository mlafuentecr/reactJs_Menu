import  React   from  'react';
import  Header  from  './Header';
import  Order   from  './Order';
import  Inventory   from  './Inventory';

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

  render() {
    return (

    <div className="catch-of-the-day">

      <Header tagline='mario is cool' age={43} cool={true} />
      <Order />
      <Inventory  addFish={this.addFish} />

    </div>

    );
  }
}
export default App;

