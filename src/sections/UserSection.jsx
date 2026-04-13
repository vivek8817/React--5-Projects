import React, { useEffect, useState } from "react";
import UserList from "../components/users/UserList";

const UserSection = () => {


  const [users, setuser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // search
  const [searchTerm, setsearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");


  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  })




  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to Fetch Data")
        }
        return response.json();
      })
      .then((data) => {
        setuser(data);
        setLoading(false);
      })
      .catch((error) => {
      setError(error.message);
      setLoading(false);
    });


  }, []);

  

  return (
    <div className="border p-4">
      <h2 className="font-semibold mb-3">User </h2>

      <input
  type="text"
  placeholder="Search users..."
  className="border p-2 mb-3 w-full"
  value={searchTerm}
  onChange={(e) => setsearchTerm(e.target.value)}
/>

<select
  className="border p-2 mb-3"
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
>
  <option value="asc">Name ↑</option>
  <option value="desc">Name ↓</option>
</select>

    {loading && <p>Loading...</p>}

    {error && <p>{error}</p>}

    

      {!loading && !error && (<UserList users={filteredUsers} />)}
    </div>
  );
};

export default UserSection;
