const usersApi = async () => {
  const res = await fetch("http://elipse-project-work-env.eba-qpijr2ce.eu-north-1.elasticbeanstalk.com/api/users");
  const data = await res.json();
  return data;
};

export default usersApi;
