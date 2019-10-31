import React from "react";

  const UserCard = props => {
    console.log(props);
    
      return (
        <div className="card">
        <div>
          <img src={props.user.avatar_url} alt="" /> 
        </div>
        <section className="name">
          <h2>{props.user.name}</h2>
          <h3>{props.user.login}</h3>
          <h3>{props.user.location}</h3>
          <h3>{props.user.company}</h3>
        </section>
      </div>
      )
  }

export default UserCard;