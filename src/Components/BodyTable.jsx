import { TbListDetails, TbTrash } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const BodyTable = ({
  cod_nombre,
  cod_sistema,
  cod_cantidad,
  descript,
  ingreso,
  caducidad,
  proveedor,
  ubicacion,
  deleteData,
  id,
}) => {
  return (
    <tr>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max px-4">{cod_nombre}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max">{cod_sistema}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max">{proveedor}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max">{ingreso}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max">{caducidad}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max">{cod_cantidad}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max">{descript}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
        <p className="max-sm:min-w-max">{ubicacion}</p>
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm flex gap-6 justify-center">
        <button>
          <TbListDetails />
        </button>
        <button
          onClick={async () => {
            const accepted = window.confirm(
              "Estas seguro que quieres eliminar esta tarea"
            );
            if (accepted) {
              await deleteData(id);
            }
          }}
        >
          <TbTrash />
        </button>
      </td>
    </tr>
  );
};

export default BodyTable;
