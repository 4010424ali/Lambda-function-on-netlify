const users = document.getElementById('users');

const fetchUser = async () =>
  await (await fetch('/.netlify/functions/getUser')).json();

const getData = async () => {
  const res = await fetchUser();

  res.forEach((user) => {
    const li = document.createElement('li');

    li.className = 'list-group-item bg-dark text-white';

    const link = document.createElement('a');

    link.appendChild(document.createTextNode(user.login));

    link.href = res.html_url;

    link.target = '_blank';

    li.appendChild(link);

    users.appendChild(li);
  });
};

getData();
