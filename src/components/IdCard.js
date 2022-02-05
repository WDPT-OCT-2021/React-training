import React from 'react';
import idPic from '../assets/images/maxence.png';

const IdCard = (props) => {
  return (
    <div>
      <p>
        <b>Last Name:</b> {props.lastName}
      </p>
      <p>{props.firstName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.birth.toString()}</p>
      <img src={props.picture} alt="id" />
      {/* <img src={idPic} alt="id" /> */}
    </div>
  );
};

export default IdCard;
