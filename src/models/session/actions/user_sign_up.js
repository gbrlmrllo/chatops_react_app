const userSignUp = user => {
  return dispatch => {
    return fetch("http://localhost:3000/signup  ", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*'
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
  }
}

export default userSignUp;