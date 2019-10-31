import React, { Component } from 'react';
import './styles/App.css';
import axios from "axios";

import UserCard from "./components/UserCard";
import FollowersCard from "./components/FollowerCard";

class App extends Component {
  state = {
    user: {},
    followers: []
  }
  

  componentDidMount(){
    axios
      .get("https://api.github.com/users/sjeremich23")
      .then(res => {
          console.log(res.data);
          this.setState({
            user: res.data
          })
          return axios.get("https://api.github.com/users/sjeremich23/followers")
      })
      .then (res => {
          console.log(res);
          this.setState({
            followers: res.data
            
          })
      })
      .catch(err =>{
          console.log("Data Not Returned:", err.response);
      });
}

  componentDidUpdate(prevProps, prevState){
    //always write these inside conditionals
    if (prevState.user !== this.state.user){
        console.log("CDU updated")
    }
    if (prevState.followers !== this.state.followers){
        console.log("CDU Updated")
    }
  }

  render () {
    return (
      <div>
        <section className="header">
          <h1>My Profile:</h1>
          <div className="row-wrapper">
            <UserCard user={this.state.user} />
          </div>
        </section>

        <section className="header">
          <h1>My Followers:</h1>
          <div className="row-wrapper">
            {this.state.followers.map((followers, i) => {
              return <FollowersCard key={i} followers={followers} />
            })}
          </div>
        </section>

      </div>
    )
  }
}

export default App;
