


var eigth_chart_month = {
    chart: {
                    theme: "fusion",
                  //caption: "Vitamin D",
                  //"subcaption": "food.hsm.com",
                  lowerLimit: "0",
                  upperLimit: "325",
                  numberSuffix: "",
                  //chartBottomMargin: "40",
                  //valueFontSize: "11",
                  valueFontBold: "0",

            showBorder: "0",
            baseFontColor: "#FDFDFD",
            baseFont: "Nunito Sans",
                bgColor: "#1D1B41", 
                bgAlpha: "0",
                canvasBgAlpha: "0",
                transposeAnimation:"1",
                showGaugeBorder: "0", 
                gaugeFillMix: "{light+0}",
                showValues: "1",
                pointerbgColor: "#ffffff",
                pointerborderColor: "#ffffff",

                        // margins
                chartTopMargin: "50",
                chartBottomMargin: "70",
                chartLeftMargin: "20",
                chartRightMargin: "20",
        /*
        
        
        showTickMarks: "0",
        showTickValues: "0",
        pointerRadius: "0",
        pointerBgAlpha: "0",
        pointerBorderAlpha: "0",
        showValue: "0",
           
        
*/
                },
                colorRange: {
                  color: [{
                  //critical - RED
                      minValue: "0",
                      maxValue: "25",
                      code:"#FF6961",
                      //"label": "Low",
                    },
                    {
                    // LOW - ORANGE
                      minValue: "25.01",
                      maxValue: "49.99",
                       code:"#FFB347",
                      //"label": "Moderate",
                    },
                    {
                    //Sub-optimal - YELLOW
                      minValue: "50",
                      maxValue: "74.99",
                       code:"#9BD888",
                       alpha: "100",
                      //"label": "High",
                    },
                    {
                    //OPTIMAL - GREEN
                      minValue: "75",
                      maxValue: "250",
                       code:"#9BD888",
                      // alpha: "100",
                      //"label": "High",
                    },
                    {
                     // HIGH - ORANGE
                      minValue: "251",
                      maxValue: "325",
                       code:"#FFb347",
                      //"label": "High",
                    }
                  ]
                },
                pointers: {
                  pointer: [{
                    value: "30"
                  }]
                },
                trendPoints: {
                  point: [
                    //Trendpoint
                    {
                      startValue: "130",
                      displayValue: " ",
                      dashed: "1",
                      showValues: "0"
                    },
                    {
                      startValue: "200",
                      displayValue: " ",
                      dashed: "1",
                      showValues: "0"
                    },
                    //Trendzone
                    {
                      startValue: "130",
                      endValue: "200",
                      displayValue: "Low",
                      code:"#9BD888",
                      alpha: "40"
                    }
                  ]
                },
                annotations: {
                  origw: "400",
                  origh: "190",
                  autoscale: "1",
                  groups: [{
                    id: "range",
                    items: [{
                        id: "rangeBg",
                        //"type": "rectangle",
                        x: "$chartCenterX-115",
                        y: "$chartEndY-35",
                        tox: "$chartCenterX +115",
                        toy: "$chartEndY-15",
                        fillcolor: "#0075c2"
                      },
                      {
                        id: "rangeText",
                        type: "Text",
                        fontSize: "11",
                        fillcolor: "#ffffff",
                        //"text": "Recommended Utilization Range : 70% - 85%",
                        x: "$chartCenterX",
                        y: "$chartEndY-25"
                      },
        {
            "id": "1",
            "type": "text",
            "text": "Folate serum",
            "fontSize": "16",
            "bold": "1",
            "color": "#FFFFFF",
            "align": "Left",
            "x": "$canvasStartX",
            "y": "$canvasStartY - 40"
        }
                    ]
                  }]
    }
        
  };
  var eigth_chart_today = eigth_chart_month;
  var eigth_chart_year = eigth_chart_month;
  
  
  var chartconfigs8 = {
    type: 'hlineargauge',
    className: 'biomarkerGuage',
    id: 'mychart8',
    width: '100%',
    height: '177',
    dataFormat: 'json',
    dataSource: eigth_chart_month
  };
  

  export default chartconfigs8;
  export { eigth_chart_today };
  export { eigth_chart_month };
  export { eigth_chart_year };