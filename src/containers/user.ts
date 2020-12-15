import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useUser(user) {
  const [data, setData] = useState(user);

  return {
    user: data,
    setUser: async (data) => {
      console.log(4444444444, data);
      setData(data);
    },
  };
}

export default createContainer(useUser);
