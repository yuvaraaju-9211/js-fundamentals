function main() {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001",
    },
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: "0101",
      zipCode: "10011",
    },
  };

  function getUserDetail(profile, keys) {
    // Implement your function here
    let str = "Not available";
    // if (profile == undefined) return str;
    let pObj = profile[keys[0]];
    if (typeof pObj === "object") {
      // console.log(`${pObj[keys[1]]}`);
      if (pObj[keys[1]] !== undefined && pObj[keys[1]] !== null) {
        str = pObj[keys[1]];
      } else {
        // console.log("Not available");
      }
    } else {
      str = pObj;
      // not available;
    }
    return str;
  }

  console.log(getUserDetail(userProfile, ["name", "blick"]));
  // Usage: should return "New York"
  //do not modify the return statement
  return getUserDetail;
}

main();

// Implement a function called getUserDetail() that takes two parameters:
//    -  a user profile object.
//    - an array of string keys.
// The function should retrieve the nested value in the profile that corresponds to the array of keys. If the keys do not lead to a valid nested value, the function should return the string "Not available".

// Expected Output:
// getUserdetails(userprofile2, [address, block])
// output : 001
// getUserdetails(userprofile1, [address, block])
// output: Not available
// getUserdetails(userprofile1, [name])
// output: John Doe
