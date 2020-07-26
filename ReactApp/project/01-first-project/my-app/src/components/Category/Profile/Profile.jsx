import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import Profile_info from './ProfileInfo/Profile_info'
// import Post from './Post/Post';



const Profile = () => {
    return (
  <div>
      <Profile_info name= "Vladislav Zaitsev" />
      <MyPosts />
  </div> 
  )
}

export default Profile;

