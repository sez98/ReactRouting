import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profileData, usersData } from '../store/actions';

const About = (props) => {

  const profile = useSelector( state => state.profileData);
  const dispatch = useDispatch();


  const getProfiles = () => {
    dispatch(profileData())
  }
  const getUsers = () => {
    dispatch(usersData())
  }

  console.log(profile)
  
  return (
    <>
      About

      <hr />
      <button onClick={() => getProfiles()}>
        Get Profiles
      </button>
      { profile && profile.profileData ?
          profile.profileData.map( item =>(
            <div key={item.id}>
              <hr />
                <div>{item.id}. {item.name}</div>
                <div>Designation: {item.designation}</div>
                <div>About: {item.about}</div>
            </div>
          ))          
      :null}

      <hr />
      <button onClick={() => getUsers()}>
        Get Users
      </button>
      { profile && profile.usersData ?
          profile.usersData.map( item =>(
            <div key={item.id}>
              <hr />
                <div>{item.id}. {item.name}</div>
            </div>
          ))          
      :null}

      
    </>
  );
}


export default About;
