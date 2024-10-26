/**
 * In the chart render event, add icons on top of the circular shapes
 */
function renderIcons() {
  this.series.forEach((series) => {
    if (series.icon) {
      series.icon.destroy(); // Remove any existing icon
      series.icon = null;
    }
  });
}

const trackColors = Highcharts.getOptions().colors.map((color) =>
  new Highcharts.Color(color).setOpacity(0.3).get()
);

Highcharts.chart("guageContainer", {
  chart: {
    type: "solidgauge",
    height: "110%",
    events: {
      render: renderIcons,
    },
  },
  exporting: {
    enabled: false, // Disable the context menu
  },
  credits: {
    enabled: false, // Disable the Highcharts credits
  },

  title: null,

  tooltip: {
    borderWidth: 0,
    backgroundColor: "none",
    shadow: false,
    style: {
      fontSize: "16px",
    },
    valueSuffix: "%",
    pointFormat:
      "{series.name}<br>" +
      '<span style="font-size: 1.5em; color: #000; ' +
      'font-weight: bold">{point.y}</span>',
    positioner: function (labelWidth, labelHeight) {
      return {
        x: (this.chart.chartWidth - labelWidth) / 2,
        y: (this.chart.plotHeight - labelHeight) / 2,
      };
    },
  },

  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Conversion
        outerRadius: "112%",
        innerRadius: "104%",
        backgroundColor: "#FDE3E3",
        borderWidth: 0,
      },
      {
        // Track for Engagement
        outerRadius: "87%",
        innerRadius: "81%",
        backgroundColor: "#FDE3E3",
        borderWidth: 0,
      },
      {
        // Track for Feedback
        outerRadius: "62%",
        innerRadius: "57%",
        backgroundColor: "#FDE3E3",
        borderWidth: 0,
      },
    ],
  },

  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: [],
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: false,
      },
      linecap: "round",
      stickyTracking: false,
      rounded: true,
    },
  },

  series: [
    {
      name: "Conversion",
      data: [
        {
          color: "#F7A400",
          radius: "112%", // Match the pane outerRadius
          innerRadius: "104%", // Match the pane innerRadius
          y: 80,
        },
      ],
      custom: {
        icon: "filter",
        iconColor: "#303030",
      },
    },
    {
      name: "Engagement",
      data: [
        {
          color: "#C3DB26",
          radius: "87%", // Match the pane outerRadius
          innerRadius: "81%", // Match the pane innerRadius
          y: 65,
        },
      ],
      custom: {
        icon: "comments-o",
        iconColor: "#ffffff",
      },
    },
    {
      name: "Feedback",
      data: [
        {
          color: "#DAE1E9",
          radius: "62%", // Match the pane outerRadius
          innerRadius: "57%", // Match the pane innerRadius
          y: 50,
        },
      ],
      custom: {
        icon: "commenting-o",
        iconColor: "#303030",
      },
    },
  ],
});
