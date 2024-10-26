document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("newbarChart", {
    chart: {
      type: "column",
    },
    credits: {
      enabled: false, // Disable the Highcharts credits
    },
    title: null,
    subtitle: null,
    legend: {
      enabled: false, // Adjust vertical position as needed
    },
    xAxis: {
      categories: ["Total Clients", "Tasks Completed", "Clients Satisfaction Rating", "Task Completion Rate"],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
      labels: {
        enabled: false,
      },
      lineColor: "#DAE1E9",
    },
    yAxis: {
      min: 0,
      max: 1000,
      tickInterval: 100,
      title: null,
      gridLineWidth: 0,
      lineWidth: 1,
      lineColor: "#DAE1E9",
      labels: {
        style: {
          fontWeight: "600", // Make y-axis labels bold
          color: "#373942",
        },
      },
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `<div style="text-align: center;">
                  <span style="font-weight: bold;">${this.series.name}</span><br>
                  <span>${this.y}</span>
                </div>`;
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        groupPadding: 0,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Total Clients",
        data: [1000],
        color: "#FF7D7D",
      },
      {
        name: "Tasks Completed",
        data: [600],
        color: "#A7CF55",
      },
      {
        name: "Clients Satisfaction Rating",
        data: [890],
        color: "#426ACF",
      },
      {
        name: "Task Completion Rate",
        data: [380],
        color: "#25C0E0",
      },
    ],
  });
});
