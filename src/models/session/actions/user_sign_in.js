const userSignIn = user => {
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => {
        const token = resp.headers.get('Authorization');
        localStorage.setItem("token", token);
        return resp.json();
      })
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
          dispatch(loginUser(data))
        }
      })
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
});

export default userSignIn;