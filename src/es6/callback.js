window.addEventListener("load", () => {
  //window loaded
  //do what you want
});

setTimeout(() => {
  // runs after 2 seconds
}, 2000);

fs.readFile("/file.json", (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err);
    return;
  }
  //no errors, process data
  console.log(data);
});

window.addEventListener("load", () => {
  document.getElementById("button").addEventListener("click", () => {
    setTimeout(() => {
      items.forEach(item => {
        //your code here
      });
    }, 2000);
  });
});

fetch(`http://www.gravatar.com`, (err, res) => {
  if (err) {
    // Show error
  } else {
    // Do something
  }
});

fetch(`http://www.gravatar.com`, (err, res) => {
  if (err) {
    // Show error
  } else {
    fetch(`http://www.gravatar.com`, (err, res) => {
      if (err) {
        // Show error
      } else {
        fetch(`http://www.gravatar.com`, (err, res) => {
          if (err) {
            // Show error
          } else {
            // Do something
          }
        });
      }
    });
  }
});
