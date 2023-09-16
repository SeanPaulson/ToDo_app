import axios from "axios";

let API_URL = 'http://localhost:9001'
if (import.meta.env.PROD) {
  API_URL = "https://todo-app-7lr8.onrender.com"
}

const todoClient = axios.create({
  baseURL: API_URL,
});

export const fetchLists = async () => {
  const Endpoint = "/lists";
  try {
    const { data } = await todoClient.get(Endpoint);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createList = (name) => {
    const Endpoint = "/lists";
    const res = todoClient
      .post(Endpoint, { name })
      .then((response) => response.data)
      .catch((err) => err);
    return res;
};

export const removeListsById = (id) => {
  const Endpoint = "/lists";
  const url = `${Endpoint}/${id}`;

  const res = todoClient
    .delete(url)
    .then((response) => response)
    .catch((err) => console.log(err));
  return res;
};

export const fetchTasks = async () => {
  const Endpoint = "/tasks";
  try {
    const { data } = await todoClient.get(Endpoint);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTasks = (id, data) => {
  const Endpoint = "/tasks";
  const res = todoClient
    .post(Endpoint, {
      content: data,
      listId: id,
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return res;
};
