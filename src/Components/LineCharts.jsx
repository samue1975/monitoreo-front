import ReactECharts from "echarts-for-react";

const LineCharts = () => {
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
        smooth: true,
      },
    ],
  };
  return (
    <div className="w-[600px] h-[400px]">
      <ReactECharts option={option} />
    </div>
  );
};

export default LineCharts;
