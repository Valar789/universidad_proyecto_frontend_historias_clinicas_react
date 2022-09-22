import React from "react";

export const UserContext = React.createContext();

export default function Auth({ value }) {
  return (
    <UserContext.Provider value={value}>
      <User />
    </UserContext.Provider>
  );
}

function User() {
  return (
    <UserContext.Consumer>
      {(value) => <h1>{value}</h1>}
      {/* prints: Reed */}
    </UserContext.Consumer>
  );
}
