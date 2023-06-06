import { useEffect, useState } from "react";

const SixTestComponent = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default SixTestComponent;
