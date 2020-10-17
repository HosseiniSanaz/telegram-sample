export default class Utilities {
  public static getQueryStringValue = (key: string): string => {
    return decodeURIComponent(
      window.location.hash.replace(
        new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"),
        "$1",
      ),
    );
  };

  public static formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesString = minutes < 10 ? "0" + minutes : minutes;
    const secondsString = seconds < 10 ? "0" + seconds : seconds;
    var strTime = hours + ":" + minutesString + ":" + secondsString + " " + ampm;
    return strTime;
  };
}
