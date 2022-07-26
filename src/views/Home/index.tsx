import React, { useState, useEffect } from 'react';
import { useStore } from '../../zustand';
const fakeUsers = {
  id: 1,
  name: 'Juana',
  lastName: 'Doe',
  age: 25,
};
type HomeProps = {
  id: number | string;
  loginStatus?: string;
};
const Home: React.FC<HomeProps> = ({ id, loginStatus }) => {
  const [users, setUsers] = useState<object>(fakeUsers);
  const [isLoading, setIsLoading] = useState<
    boolean | undefined
  >(true);

  const [useStore] = useMyStore;
  console.log(useStore);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? 'Cargando' : ''}
      <h1>Home!</h1>
    </div>
  );
};

export default Home;
