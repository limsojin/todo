import axios from 'axios';

function fetchTodo(todo) {
  const url = 'http://localhost:8081/todo';
  return axios.post(url, todo);
}
export { fetchTodo };

/* const tempAxios = `${process.env.VUE_APP_APIURL}/weather?q=Seoul&units=metric&APPID=${process.env.VUE_APP_APIKEY}`;

async function saveTemp() {
  try {
    const res = await axios.get(tempAxios);
    return res.data.main.temp;
  } catch (error) {
    console.error(error);
  }
}

export default { saveTemp };
*/
