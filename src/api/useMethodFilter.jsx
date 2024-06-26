import { useState, useEffect } from "react";

const useMethodFilter = (url) => {
    //setear los hooks useState
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");

    //función para traer los datos de la API
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            //console.log(data)
            .then((json) => setItem(json.data.results));
    }, [url]);

    //función de búsqueda
    const searcher = (value) => {
        setSearch(value);
    };
    //metodo de filtrado 1
    let results = [];
    if (!search) {
        results = item;
    } else {
        results = item.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        );
    }
    //metodo de filtrado 2
    /*   const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
     */
    return { searcher, results };

}

export default useMethodFilter