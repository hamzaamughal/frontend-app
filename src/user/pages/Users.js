import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'HamzaMughal',
      image: 'https://randomuser.me/api/portraits/',
      places: 3,
    },
    {
      id: 'u2',
      name: 'Abubakar',
      image: 'https://randomuser.me/api/portraits/',
      places: 2,
    },
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
