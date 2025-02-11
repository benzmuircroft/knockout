# 🕳🥊 Knockout 😵

Find out if the user is already running a server on the DHT and send them a boot out message before any login!

# Installation
```
npm i "github:benzmuircroft/knockout"
```

# Usage
```js
console.log(await knockout(b4a.from(publicKey, 'hex')));
```

# Handling the punch
```js
// inside conection on data
if (data.punch) quit(); // K.O quit the application
``` 
