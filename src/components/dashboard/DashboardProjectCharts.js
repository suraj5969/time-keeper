import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// TODO: chnage this library react-apexcharts as it uses window object and try some else library
// it giving me following error
// Unhandled Runtime Error
// Error: This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  // loading: () => <div>Loading...</div>,
  // suspense: true,
});
// const getChartColorsArray = dynamic(() => import("../../utils/ChartsDynamicColor"), { ssr: false });

const ProjectsOverviewCharts = ({ dataColors, series }) => {
  //   var linechartcustomerColors = getChartColorsArray(dataColors);
  const [linechartcustomerColors, setLinechartcustomerColors] = useState([]);

  useEffect(() => {
    const charColorsArray = async () => {
      const getChartColorsArray = (await import("../../utils/ChartsDynamicColor")).default;
      setLinechartcustomerColors(getChartColorsArray(dataColors));
      //   console.log(getChartColorsArray(dataColors),'getChartColorsArray(dataColors)');
    };
    charColorsArray();
  }, [dataColors]);

  var options = {
    chart: {
      height: 374,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      dashArray: [0, 3, 0],
      width: [0, 1, 0],
    },
    fill: {
      opacity: [1, 0.1, 1],
    },
    markers: {
      size: [0, 4, 0],
      strokeWidth: 2,
      hover: {
        size: 4,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: -2,
        bottom: 15,
        left: 10,
      },
    },
    legend: {
      show: true,
      horizontalAlign: "center",
      offsetX: 0,
      offsetY: -5,
      markers: {
        width: 9,
        height: 9,
        radius: 6,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        barHeight: "70%",
      },
    },
    // TODO: see why adding colors prop raisesa error
    // colors: linechartcustomerColors,
    tooltip: {
      shared: true,
      y: [
        {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          },
        },
        {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return "$" + y.toFixed(2) + "k";
            }
            return y;
          },
        },
        {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          },
        },
      ],
    },
  };
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height="374"
          className="apex-charts"
        />
      {/* </Suspense> */}
    </>
  );
};

const TeamMembersCharts = ({ seriesData, chartsColor }) => {
  // const series=  isApexSeriesData.series,
  const series = [seriesData];

  const options = {
    chart: {
      type: "radialBar",
      width: 36,
      height: 36,
      sparkline: {
        enabled: !0,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%",
        },
        track: {
          margin: 1,
        },
        dataLabels: {
          show: !1,
        },
      },
    },
    colors: [chartsColor],
  };
  return (
    <>
      {/* <Suspense fallback={`Loading...`}> */}
        <ReactApexChart
          options={options}
          series={[...series]}
          type="radialBar"
          height="36"
          className="apex-charts"
        />
      {/* </Suspense> */}
    </>
  );
};

const PrjectsStatusCharts = ({ dataColors, series }) => {
  //   var donutchartProjectsStatusColors = getChartColorsArray(dataColors);

  const [donutchartProjectsStatusColors, setDonutchartProjectsStatusColors] = useState([]);

  useEffect(() => {
    const charColorsArray = async () => {
      const getChartColorsArray = (await import("../../utils/ChartsDynamicColor")).default;
      setDonutchartProjectsStatusColors(getChartColorsArray(dataColors));
    };
    charColorsArray();
  }, [dataColors]);

  var options = {
    labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
    chart: {
      type: "donut",
      height: 230,
    },
    plotOptions: {
      pie: {
        size: 100,
        offsetX: 0,
        offsetY: 0,
        donut: {
          size: "90%",
          labels: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      lineCap: "round",
      width: 0,
    },
    // TODO: see why adding colors prop raisesa error
    // colors: donutchartProjectsStatusColors,
  };
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height="230"
          className="apex-charts"
        />
      {/* </Suspense> */}
    </>
  );
};

export { ProjectsOverviewCharts, TeamMembersCharts, PrjectsStatusCharts };
