export const convertToFahr = (tempKel) => {
  return Math.floor(tempKel * (9 / 5) - 459.67);
};

export const configureRequest = (requestType, location, key) => {
  let configuredUrl;
  let validRequestTypes = ["currentConditions"];
  let baseUrl = `http://api.wunderground.com/api/${key}/`;

  if ( validRequestTypes.includes(requestType) ) {
    switch (requestType) {
      case "currentConditions":
        if ( location.state && location.state !== undefined) {
          configuredUrl = baseUrl + `conditions/q/${location.state}/${location.city}.json`;
        }
        break;
      default:
        console.log("No requestType was passed to configureRequest");
    }
  } else {
    console.log("Invalid requestType passed to configureRequest");
  }

  return configuredUrl;

};

export const genKey = (usedNum) => {
  let newKey = Math.floor(Math.random() * Math.floor(5000));

  if ( usedNum.includes(newKey) ) {
    return genKey(usedNum);
  } else {
    usedNum.push(newKey);
    return newKey;
  }

};

export const formatDate = (uglyDate) => {
  let months = [
    "Jan", "Feb",
    "Mar", "Apr",
    "May", "Jun",
    "Jul", "Aug",
    "Sep", "Oct",
    "Nov", "Dec"
  ];

  let date = new Date(uglyDate * 1000);
  let dayNum = date.getDate();
  let dateMonth = date.getMonth(uglyDate);

  return months[dateMonth] + " " + dayNum;
};

export const metersPerSecToMPH = (metersPerSec) => {
  let milesPerHour = Math.round( metersPerSec * 2.23694 );
  return milesPerHour;
};

export const pickIcon = (icons, conditions) => {
  let currentIcon;

  switch (conditions) {
    case "Clear":
      currentIcon = icons.sunny;
      break;
    case "Clouds":
      currentIcon = icons.cloudy;
      break;
    case "Rain":
      currentIcon = icons.rain;
      break;
    case "Mist":
      currentIcon = icons.rain;
      break;
    case "Snow":
      currentIcon = icons.snow;
      break;
    default:
      currentIcon = icons.sunny;

  }

  return currentIcon;

};
