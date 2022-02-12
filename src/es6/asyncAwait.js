const AsyncCallAPI = async () => {
  try {
    const res1 = await fetch("http://www.gravatar.com");
    const res2 = await fetch("http://www.gravatar.com");
    const res3 = await fetch("http://www.gravatar.com");
  } catch (err) {}
};

const AsyncCallAPIParallel = async () => {
  const fetchList = [
    fetch("http://www.gravatar.com"),
    fetch("http://www.gravatar.com"),
    fetch("http://www.gravatar.com")
  ];

  try {
    const res = await Promise.all(fetchList);
  } catch (err) {}
};
