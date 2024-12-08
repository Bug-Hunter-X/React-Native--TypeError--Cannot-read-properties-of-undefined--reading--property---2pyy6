The solution involves using optional chaining (`?.`) to handle potential null or undefined values before accessing object properties:

```javascript
//Correct Solution
console.log(userData?.address?.street);

//Alternative using logical AND
const street = userData && userData.address && userData.address.street;
console.log(street);

//Handling within a function
const getStreet = (userData) => {
  if (userData && userData.address && userData.address.street){
    return userData.address.street;
  } else {
    return ""; //Or a default value
  }
}
console.log(getStreet(userData));
```

These changes prevent the error by either returning undefined (optional chaining) or explicitly handling null or undefined cases.  Always check if an object exists and that properties are defined before accessing them to prevent this error.