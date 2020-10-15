export default class Utilities {
  public static getQueryStringValue = (key: string): string => {
    return decodeURIComponent(
      window.location.hash.replace(
        new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"),
        "$1",
      ),
    );
  };
}
