import React from "react";

  const FollowersCard = props => {
      return (
        
          <div className="card">
            <div>
              <img src={props.followers.avatar_url} alt="" /> 
            </div>
            <section className="name">
              <h2>{props.followers.login}</h2>
            </section>
          </div>
      )
}

export default FollowersCard;