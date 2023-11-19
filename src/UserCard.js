import React from 'react';

const UserCard = ({ person }) => {
  return (
    <div className="user-card">
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
      <p>Username: {person.login.username}</p>
      <p>Gender: {person.gender}</p>
      <p>Time Zone Description: {person.location.timezone.description}</p>
      <p>Address: {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}</p>
      <p>Email: {person.email}</p>
      <p>Birth Date and Age: {person.dob.date} ({person.dob.age} years)</p>
      <p>Register Date: {person.registered.date}</p>
      <p>Phone: {person.phone}</p>
      <p>Cell: {person.cell}</p>
      <button onClick={() => {}}>Details</button>
    </div>
  );
};

export default UserCard;