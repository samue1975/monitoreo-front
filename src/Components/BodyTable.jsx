const BodyTable = ({
  cod_oaci,
  cod_e,
  cod_fg,
  cod_hi,
  cod_jk,
  cod_su,
  cod_lmnop,
  descripcion,
  cod_barra,
  cod_sistema,
}) => {
  return (
    <tr>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_oaci}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_e}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_fg}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_hi}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_jk}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_su}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_lmnop}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {descripcion}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_barra}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_sistema}
      </td>
    </tr>
  );
};

export default BodyTable;
