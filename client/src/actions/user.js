var Api = require("../Helpers/Api");

export function setUserData(name, value) {
  return {
    type: "SET_USER_DATA",
    payload: { [name]: value },
  };
}

export function UserLogin(username, password) {
  return function (dispatch) {
    dispatch({ type: "REQUEST_INITIATE" });
    dispatch({ type: "SET_USER_DATA", payload: { loginProcessing: true } });
    let data = {
      username: username,
      password: password,
      grant_type: "password",
      scope: "user",
    };
    Api.send_request("/api/auth/token", data, (err, data) => {
      if (err) {
      } else {
        if (data.error) {
        } else {
        }
      }
    });
  };
}
