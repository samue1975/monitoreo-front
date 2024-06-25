import { useEffect, useState } from "react";

const useMethodPost = (data, urlApi) => {
    const [success, setSuccess] = useState();
    const [errorsPost, setError] = useState();
    // Definimos la URL a la que vamos a hacer la solicitud
    const url = `${urlApi}`;
    // Definimos el objeto que vamos a enviar

    // Hacemos la solicitud POST utilizando fetch

    useEffect(() => {
        if (data) {
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
                    setSuccess(Success);
                })
                .catch((error) => {
                    console.error("Error:", error); // Manejamos cualquier error que ocurra
                    setError(error)
                });

        }
    }, [data, url])
    return { success, errorsPost };
};

export default useMethodPost;
