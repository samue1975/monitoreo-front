import { useState, useEffect } from "react";

const useMethodFilter = (url, cambio) => {
  //setear los hooks useState
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");
  const [searchId, setSearchId] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [lineaInves, setLineaInves] = useState("");
  const [sectorInves, setSectorInves] = useState("");
  const [proveedores, setProveedores] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //función para traer los datos de la API
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      //console.log(data)
      .then((json) => setItem(json))
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, cambio]);

  //función de búsqueda
  const searcher = (value) => {
    setSearch(value);
  };
  const identificacion = (value) => {
    setSearchId(value);
  };
  const departamentofunc = (value) => {
    setDepartamento(value);
  };
  const sectorInvesfunc = (value) => {
    setSectorInves(value);
  };
  const lineaInvesfunc = (value) => {
    setLineaInves(value);
  };
  const proveedoresfunc = (value) => {
    setProveedores(value);
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
  let resultsId;
  if (
    !search &&
    !searchId &&
    !departamento &&
    !lineaInves &&
    !sectorInves &&
    !proveedores
  ) {
    resultsId = item;
  } else {
    resultsId = item.filter(
      (dato) =>
        dato.codE.toLowerCase().includes(searchId.toLocaleLowerCase()) &&
        dato.codFg.toLowerCase().includes(departamento.toLocaleLowerCase()) &&
        dato.codJk.toLowerCase().includes(lineaInves.toLocaleLowerCase()) &&
        dato.codHi.toLowerCase().includes(sectorInves.toLocaleLowerCase()) &&
        dato.codSu.toLowerCase().includes(proveedores.toLocaleLowerCase()) &&
        dato.codSistema.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return {
    searcher,
    resultsId,
    identificacion,
    departamentofunc,
    sectorInvesfunc,
    lineaInvesfunc,
    proveedoresfunc,
    isLoading,
  };
};

export default useMethodFilter;
