const fetch = new Promise((resolve, reject) => {
  if (true) {
    const workDone = "Here is the thing I built";
    resolve(workDone);
  } else {
    const why = "Still working on something else";
    reject(why);
  }
});

fetch("http://www.gravatar.com")
  .then(res => {})
  .catch(err => {});

fetch("http://www.gravatar.com")
  .then(res => fetch("http://www.gravatar.com"))
  .then(res => fetch("http://www.gravatar.com"))
  .catch(err => {});

const fetchList = [
  fetch("http://www.gravatar.com"),
  fetch("http://www.gravatar.com"),
  fetch("http://www.gravatar.com")
];
Promise.all(fetchList)
  .then(res => {
    // res is array of response
  })
  .catch(err => {});

const fetchRace = [
  fetch("http://www.gravatar.com"),
  fetch("http://www.gravatar.com")
];

Promise.race(fetchRace)
  .then(res => {
    // res is first of response from server
  })
  .catch(err => {});
