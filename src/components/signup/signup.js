import React from 'react';
import { useState , useEffect} from 'react';
import {storage} from  '../../firebase';

 
import { Link, NavLink,withRouter } from 'react-router-dom';
import useSignup from '../../hooks/auth/signup';

const Signup = (props) => {

 const [user , setuser] =  useState({});
 const [image ,setImage] = useState(null);
 const [url, setUrl] = useState("");
 const [progress, setProgress] = useState(0);
 const [signup] = useSignup();
 const handleChange = (e) => {
  setuser({...user, [e.target.name]: e.target.value });
  };
  const handleFile = (e) =>{
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

 const handleSubmit = (e) => {
    e.preventDefault();
    if(image){
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              let userInfo = user;
              userInfo.profile_img = url;
              signup(userInfo);
              props.history.push('/')
            })
        }
      );
    }else{
      signup(user);
      props.history.push('/')
    }
   
  };
    return (
      <>
          <span>Sign up</span>
          <form onSubmit={handleSubmit}>
            <input
            required
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
            />
            <input
            required
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            <input
            required
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
             <input
            // required
              type="file"
              name="profile_img"
              onChange={handleFile}
            />
            <select required name="role" onChange={handleChange}>
            <option selected disabled>Choose your role</option>
                <option value='student'>student</option>
                <option value='instructor'>instructor</option>
            </select>
            <button>Signup</button>
          </form>
          <span>back to <Link to="/">signin</Link></span>
        
      </>
    );
  
}

export default withRouter(Signup);
