function main() {
  let userAuth = (function () {
    // Create an empty array to store user data.
    const registeredUser = [];
    // Define the registerUser function.
    function registerUser(uname, passw) {
      if (checkCredentials(uname)) {
        // return message that user exists
        return "The user is already registered";
      } else {
        // add to registered user array
        registeredUser.push(uname);
        return "The user have been added to the registeredUser array";
      }
    }

    // Define the checkCredentials function.
    function checkCredentials(uname) {
      if (registeredUser.includes(uname)) {
        return true;
      } else {
        return false;
      }
    }

    // Return the registerUser function as part of the userAuth object
    return { registerUser };
  })();

  // Example usage
  console.log(userAuth.registerUser("user1", "password123"));
  // Output: "The user have been added to the registeredUser array"
  console.log(userAuth.registerUser("user1", "password123"));
  // Output: "The user is already registered"

  return userAuth;
}

main();
