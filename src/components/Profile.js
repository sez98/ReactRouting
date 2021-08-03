import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {
  const [redir,setRedir] = useState(false)
  console.log(props);

  const redirect = () => {
    if(redir){
      props.history.push('/');
      // return(
      //     <Redirect to="/"/>
      // )
    }
  }
  return (
    <>
      {redirect()}
      <div>
          Profile
      </div>
      <button
          onClick={()=> setRedir(true)}
        >
          Redirect
      </button>
    </>
  );
}

export default Profile;
