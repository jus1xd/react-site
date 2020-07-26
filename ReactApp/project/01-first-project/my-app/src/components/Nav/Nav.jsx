import React from 'react';
import { NavLink } from 'react-router-dom'
import profile from '../../profile.svg'
import news from '../../news.svg'
import messages from '../../messages.svg'
import friends from '../../friends.svg'
import groups from '../../group.svg'
import photos from '../../camera.svg'
import videos from '../../video.svg'
import music from '../../music.svg'

const Nav = () => {
    return (
      <nav className="nav">
          <div className="nav__item">
            <img src={profile} ></img>
            <NavLink className="nav__link" to="/profile">My Profile</NavLink>
          </div>
          <div className="nav__item">
            <img src={news} />
            <NavLink className="nav__link" to="/news">News</NavLink>
          </div>
          <div className="nav__item">
            <img src={messages} />
            <NavLink className="nav__link" to="/dialogs">Messages</NavLink>
          </div>
          <div className="nav__item">
            <img src={friends} />
            <NavLink className="nav__link" to="/friends">Friends</NavLink>
          </div>
          <div className="nav__item">
            <img src={groups} />
            <NavLink className="nav__link" to="/groups">Communities</NavLink>
          </div>
          <div className="nav__item">
            <img src={photos} />
            <NavLink className="nav__link" to="/photos">Photos</NavLink>
          </div>
          <div className="nav__item">
            <img src={music} />
            <NavLink className="nav__link" to="/music">Music</NavLink>
          </div>
          <div className="nav__item">
            <img src={videos} />
            <NavLink className="nav__link" to="/videos">Videos</NavLink>
          </div>
       </nav>
    )
}

export default Nav;

