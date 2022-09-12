const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);


  fetchCoordsByIP(ip, (error, coordinates) => {
    if (error) {
      console.log("It didn't work!", error.message);
      return;
    }

    console.log("It worked! Returned coordinates: ", coordinates);

    fetchISSFlyOverTimes(coordinates, (error, flytimes) => {
      if (error) {
        console.log("It didn't work!", error.message);
        return;
      }

      console.log("It worked! Returned flying times: ", flytimes);

    });

  });
});
