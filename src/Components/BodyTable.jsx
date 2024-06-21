import { TbListDetails } from "react-icons/tb";

const BodyTable = ({
  cod_nombre,
  cod_descripcion,
  cod_sistema,
  cod_lote,
  cod_cantidad,
}) => {
  return (
    <tr>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_nombre}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_descripcion}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_sistema}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_lote}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_cantidad}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        <button>
          <TbListDetails />
        </button>
      </td>
    </tr>
  );
};

export default BodyTable;
