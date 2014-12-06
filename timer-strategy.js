module.exports = function (rocket) {
  console.log('Using timer based strategy');

  rocket.on('launch', function() {
    console.log('Deploying parachute in 5s');
    setTimeout(function(){
      console.log('Deploying parachute now!');
      rocket.deployParachute();
    }, 5000);
  });

  rocket.on('data', function() {

  });
};
