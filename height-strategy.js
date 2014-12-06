module.exports = function (rocket) {
  console.log('Using height based strategy');
  var previousAltitude = 0;
  var lessHeightReadings = 0;
  var lessHightReadingsTreshold = 3;
  rocket.on('data', function(data) {
    console.log("Rocket data", data);

    if (!data.deployed && previousAltitude > 0 && previousAltitude < data.altitude) {
      lessHeightReadings++;
      console.log("Rocket altitude decreased to", data.altitude);
    }

    if (lessHeightReadings === lessHightReadingsTreshold) {
      console.log("Deploying parachute at", data.altitude);
      rocket.deployParachute();
    }
    previousAltitude = data.altitude;
  });
};
