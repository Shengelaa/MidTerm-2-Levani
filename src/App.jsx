import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Name: {`${user.name.first} ${user.name.last}`}</p>
          <p>Age: {user.dob.age}</p>
          <p>Username: {user.login.username}</p>
          <p>City: {user.location.city}</p>
          <p>Country: {user.location.country}</p>
          <p>Postcode: {user.location.postcode}</p>
        </div>
      ) : (
        <div>No user found.</div>
      )}
    </div>
  );
};

export default App;
