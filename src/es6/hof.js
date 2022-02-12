const createLogger = options => {
  return message => {
    console.log(message);
  };
};

const log = createLogger({
  level: "info"
});

// log("Something log");
