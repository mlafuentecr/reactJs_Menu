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

// actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be whitelisted in the Firebase Console.
//   url: 'http://www.mariolafuente.com/?cartId=1234',
//   // This must be true.
//   handleCodeInApp: true,
//   iOS: {
//     bundleId: 'com.mariolafuente.ios'
//   },
//   android: {
//     packageName: 'com.mariolafuente.android',
//     installApp: true,
//     minimumVersion: '12'
//   },
//   dynamicLinkDomain: 'mariolafuente.page.link'
// };

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
      console.log( '3 no tiene dueno email verificado?'+authData.user.emailVerified);
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


  
    if(provider !== 'email'){
      //SignIn for web
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  }else{
    //sigin by email
    firebase.auth().languageCode = 'spa';
    console.log('2 email ');
    let email = window.prompt('Please provide your email for confirmation');
    let pass = window.prompt('Please provide your pass for confirmation');


    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode+' 2.2 error '+errorMessage);

      if(errorCode === 'auth/user-not-found'){

          firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('2.2 error '+errorMessage);
          // ...
        });
        
      }

    });

 

    // firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log('2.2 error '+errorMessage);
    //   // ...
    // });

    // firebase.auth().sendSignInLinkToEmail(email, this.actionCodeSettings)
    // .then(function() {
    //   // The link was successfully sent. Inform the user.
    //   // Save the email locally so you don't need to ask the user for it again
    //   // if they open the link on the same device.
    //   window.localStorage.setItem('emailForSignIn', email);
    // })
    // .catch(function(error) {
    //   // Some error occurred, you can inspect the code: error.code
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log('2.2 error '+errorMessage);
    // });
    // //Ahora brinca a authHandler











  }



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
