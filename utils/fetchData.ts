//data request

const baseUrl = process.env.BASE_URL;

const buildHeader = (method, token = "") => {
  return {
    method: method,
    headers: {
      Authorization: token,
    },
  };
};

export const getData = async (url, token = "") => {
  const res = await fetch(`${baseUrl}/api/${url}`, buildHeader("GET", token));
  const data = await res.json();
  return data;
};

export const postData = async (url, post, token = "") => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const putData = async (url, post, token = "") => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const patchData = async (url, post, token = "") => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const deleteData = async (url, token = "") => {
  const res = await fetch(
    `${baseUrl}/api/${url}`,
    buildHeader("DELETE", token)
  );

  const data = await res.json();
  return data;
};
