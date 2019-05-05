import React          from 'react';
import PropTypes      from 'prop-types';

const Login = (props) => (
  <nav className='login'>
    <h2>Inventory loging</h2>
    <p>Sign in to manage your store</p>
    <button className='github'    onClick={()=> props.authenticate('Github')}>Log in with Github</button>
    <button className='facebook'  onClick={()=> props.authenticate('Facebook')}>Log in with Facebook</button>
    <button className='email'     onClick={()=> props.authenticate('email')}>Log in with Facebook</button>
    
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}
export default Login;