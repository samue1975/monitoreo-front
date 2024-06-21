/* const urlPost = "http://192.168.0.130:80/api/Codigos/RegistrodeCodigos/";
 */
const useMethodPost = (data, urlApi) => {
  // Definimos la URL a la que vamos a hacer la solicitud
  const url = `${urlApi}`;
  // Definimos el objeto que vamos a enviar

  // Hacemos la solicitud POST utilizando fetch
  fetch(url, {
    method: "POST", // Método de la solicitud
    headers: {
      "Content-Type": "application/json", // Indicamos que estamos enviando un JSON
    },
    body: JSON.stringify(data), // Convertimos el objeto data a una cadena JSON
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json(); // Parseamos la respuesta JSON
    })
    .then((Success) => {
      console.log("Success:", Success); // Aquí podemos trabajar con la respuesta del servidor
    })
    .catch((error) => {
      console.error("Error:", error); // Manejamos cualquier error que ocurra
    });
};

export default useMethodPost;
