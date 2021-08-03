import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profileData } from '../store/actions';

const About = (props) => {

  const profile = useSelector( state => state.profileData );
  const dispatch = useDispatch();


  const getProfiles = () => {
    dispatch(profileData())
  }

  console.log(profile)
  
  return (
    <>
      About
      <hr />
      <button onClick={() => getProfiles()}>
        GetProfiles
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

    </>
  );
}


export default About;
