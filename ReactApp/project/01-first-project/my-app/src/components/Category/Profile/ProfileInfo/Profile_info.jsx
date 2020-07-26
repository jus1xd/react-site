import React from 'react';




const Profile_info = (props) => {
    return (
  <div>
    <div className="wall__image">
      <img src="http://placehold.it/825x200"></img>
    </div> {/* /wall__image */}
      <div className="profile__person">  
            <div className="profile__avatar">
              <img src="http://placehold.it/150x150"></img>
            </div>
            <div className="profile__info">
              <h2 className="profile__name">{props.name}</h2>
              <h3 className="info__text">Date of Birth: {props.birthday}</h3>
              <h3 className="info__text">City: {props.city}</h3>
              <h3 className="info__text">Education: {props.education}</h3>
              <h3 className="info__text">Web Site: {props.website}</h3>
            </div> {/* /profile__info */}
      </div> {/* /profile__person */}
  </div> 
  )
}

export default Profile_info;

