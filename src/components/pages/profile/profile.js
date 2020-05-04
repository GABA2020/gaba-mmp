import React from 'react';
import './profile.css';
import { useParams } from "react-router-dom";

const Profile = ({ match  }) => {
  const { profileId } = useParams();
  console.log('match', match, 'useParams()', useParams());
  

  return (
    <div class="page-content">user profile page{profileId && `: ${profileId}`}</div>
  );
};

export default Profile;
