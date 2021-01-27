


var fourth_chart_month = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    placeValuesInside: "0",
    showAlternateVGridColor: "0",
    canvasBgAlpha: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    showDivLineValues: "0",
    divLineAlpha: "0",
    showLimits: "0",
    baseFontBold: "0",
    usePlotGradientColor: "0",
    numberSuffix: " %",
    yAxisMaxValue: "3",
    paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE, #3123AF",
    labelFontColor: "#C6C4C4",
    labelFontBold: "0",
    labelFontSize: "16",
    plotBorderAlpha: "0",
    plotFillAlpha: "100",
    valueFontBold: "1",
    valueFontColor: "#FDFDFD",
    valueFontSize: "13",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasLeftMargin: "0",
    canvasRightMargin: "40",
    canvasBottomMargin: "20",
    canvasTopMargin: "20",
    showHoverEffect: "1"
  },

  annotations: {
    groups: [
      {
        items: [
          {
            id: "info",
            type: "text",
            //text: "Your performance areas top down.",
            text: "",
            align: "right",
            color: "#FDFDFD",
            font: "Nunito Sans Light",
            fontSize: "15",
            bold: "0",
            x: "$canvasEndX + 30",
            y: "$canvasEndY - 25"
          }
        ]
      }
    ]
  },

  data: [
    {
      label: "Energy",
      value: "94",
      toolText: "$Label: Optimal"
    },
    {
      label: "Cognition",
      value: "83",
      toolText: "$Label: Excellent"
    },
    {
      label: "Fitness & Strength",
      value: "74",
      toolText: "$Label: Good"
    },
    {
      label: "Immunity",
      value: "72",
      toolText: "$Label: Good"
    },
    {
      label: "Mood",
      value: "68",
      toolText: "$Label: Good"
    },
    {
      label: "Sleep",
      value: "51",
      toolText: "$Label: Room to improve"
    },
    {
      label: "Metabolism",
      value: "51",
      toolText: "$Label: Room to improve"
    }
  ]
};
var fourth_chart_today = fourth_chart_month;
var fourth_chart_year = fourth_chart_month;



var chartConfigs4 = {
    type: "bar2d",
    className: "fc-bar2d",
    id: "mychart4",
    dataFormat: "JSON",
    width: "100%",
    height: "300",
    dataSource: fourth_chart_month
};

export default chartConfigs4;
export { fourth_chart_today };
export { fourth_chart_month };
export { fourth_chart_year };