import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import {fetchUsers} from './actions'
import Users from './containers/usersContainer'
import Modal from './containers/modalContainer';



const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])
  return(
    <div className="main-container">
      <Users />
      <Modal />
    </div>
  )

}

export default App;
