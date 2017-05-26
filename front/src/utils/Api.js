export const getAll = (model, func) => {
    return fetch('http://127.0.0.1:5000/api/' + model, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }})
      .then((response) => response.json())
      .then(func)
      .catch((error) => {
        console.error(error);
      });
  }