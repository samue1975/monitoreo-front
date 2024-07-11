import ReactECharts from "echarts-for-react";

const LineCharts = ({ e, c, p, m, s, h, titulo }) => {
  const option = {
    title: {
      text: titulo,
    },
    xAxis: {
      type: "category",
      data: ["E", "C", "P", "M", "S", "H"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [e, c, p, m, s, h],
        type: "bar",
        itemStyle: {
          color: "#292929",
        },
        label: {
          show: true,
          position: "top",
          formatter: "{@[0]}", // Muestra el valor correspondiente
          color: "#666666", // Color del texto
          fontSize: "10", // Tamaño del texto
        },
      },
    ],
  };

  return (
    <div className="border shadow pt-2 pl-2">
      <ReactECharts option={option} />
    </div>
  );
};

export default LineCharts;
