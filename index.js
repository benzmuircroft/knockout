const knockout = async (yourPublicKey) => { // find out if the user is already running a server on the DHT and send them a boot out message before any login!
  return new Promise((resolve) => {
    ;(async function(yourPublicKey, resolve) {
      const phone = new DHT(); // make a phone call to a user
      await phone.ready();
      let call = phone.connect(yourPublicKey);
      call.on('open', function () {
        console.log('Client connected!');
        call.write(b4a.from(JSON.stringify({ punch: true }))); // knock them out!
        call.end();
        resolve(true);
      });
      call.on('error', function (err) {
        console.log('Client errored:', err);
        resolve(false);
      });
    })(yourPublicKey, resolve);
  });
};

module.exports = knockout;
