import React        from "react";
import PropTypes    from "prop-types";
import firebase     from "firebase";
import AddFishForm  from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login        from "./Login";
import base, { firebaseApp } from "../base";


class Inventory extends React.Component {
  static propTypes = {
  //con PropoTypes alerto que tagline es necerario
  fishes:       PropTypes.object,
  updateFish:   PropTypes.func,
  deleteFish:   PropTypes.func,
  loadExamples: PropTypes.func,

  }


state = {
  uid: null,
  owner: null
}

componentDidMount(){
  firebase.auth().onAuthStateChanged(user => {
    if(user){
      this.authHandler({ user });
    }
  })
}
  authHandler = async (authData) => {
    // 1 .Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log( JSON.stringify(authData) + '2 store= '+ this.props.storeId);
    
 
    // 2. Claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      console.log( '3 no tiene dueno');
      //lo podria hacer con email que viene de github ***** pero fb no siempre tiene email
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // 3. Set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid ,
      owner: store.owner || authData.user.uid 
    });
    

  };



  authenticate  = (provider) => {
    console.log('1 provider= '+provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logOut = async () => {
    console.log('out');
    await firebase.auth().signOut();
    this.setState({ uid: null});
  }

render() {

  const logOutBtn = <button onClick={this.logOut}>Log Out!</button>
  //1 check if they are login
  if(!this.state.uid){
    return <Login authenticate  = {this.authenticate} />;
  }
  //2 Check if they are not owners
  console.log()
  if(this.state.uid !== this.state.owner){
    return <div>
        <p>Sorry you are not the owner!</p>
        {logOutBtn}
    </div>;
  }

  //3 the must be the owner just render inventory
  return (
        <div className="inventory">
          <h2>Inventory</h2>
          {logOutBtn}
          {Object.keys(this.props.fishes).map(key =>
          <EditFishForm key={key} index={key}
          fish={this.props.fishes[key]}
          updateFish ={this.props.updateFish}
          deleteFish ={this.props.deleteFish}
          />)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadExamples}>Load Samples Fishes</button>
      </div>
      )

}

}



export default Inventory;
