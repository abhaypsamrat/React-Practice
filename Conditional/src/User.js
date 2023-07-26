import React from "react";

function User() {
  const loggedIn = false;

  // Not recommended
  //   if (loggedIn) {
  //     return <div>Welcome User</div>;
  //   }else{
  //     return(<h2>Please Sign up</h2>)
  //   }

  return <div>{loggedIn ? <p>Welcome User</p> : <p>Please Sign up</p>}</div>;

  // if condition true then print <p>Welcome User</p>
  // else print <p>Welcome Guest</p>
}

export default User;
