module.exports = function (rocket) {
  console.log('Using height based strategy');
  var previousAltitude = 0;
  rocket.on('data', function() {
      console.log("rocket data", data);
      previousAltitude = data.altitude;
  });
};
