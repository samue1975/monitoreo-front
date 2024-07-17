import { useState, useEffect } from "react";

const useMethodFilter = (url) => {
    //setear los hooks useState
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");


    const [isLoading, setIsLoading] = useState(true);


    //función para traer los datos de la API
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then((response) => response.json())
            //console.log(data)
            .then((json) => setItem(json))
            .finally(() => { setIsLoading(false) })
    }, [url]);

    //función de búsqueda
    const searcher = (value) => {
        setSearch(value);
    };


    //metodo de filtrado 1
    /* let results = [];
    if (!search) {
        results = item;
    } else {
        results = item.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        );
    } */


    //metodo de filtrado 2
    let resultsId
    if (!search) {
        resultsId = item
    } else {
        resultsId = item.filter((dato) =>
            dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        );
    }

    return { searcher, resultsId, isLoading };

}

export default useMethodFilter






