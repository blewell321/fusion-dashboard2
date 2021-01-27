
var dayVal1 = "1.1";

var sixth_chart_today = {
    "chart": {
        "showValues": "0",
        "showBorder": "0",
        "baseFontColor": "#FDFDFD",
        "baseFont": "Nunito Sans",
        "showTickMarks": "1",
        "showTickValues": "1",
        //"pointerRadius": "0",
        //"pointerBgAlpha": "0",
        //"pointerBorderAlpha": "0",
        "gaugeFillMix": "{light+0}",
        "showValue": "0",
        "showGaugeBorder": "0",
        // margins
        "chartTopMargin": "70",
        "chartBottomMargin": "70",
        "chartLeftMargin": "20",
        "chartRightMargin": "20",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"
    },
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": dayVal1,
            "code": "#8C8C8C"
        },
        {
            "minValue": dayVal1,
            "maxValue": "5.9",
            "code": "#48526F"
        }
        ]
    },
    "pointers": {
        "pointer": [{
            "value": dayVal1
        }]
    },

    "annotations": {
        "groups": [{
            "items": [{
                "id": "1",
                "type": "text",
                "text": "Emission",
                "fontSize": "16",
                "bold": "1",
                "color": "#FFFFFF",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 40"
            }, {
                "id": "2",
                "type": "text",
                "text": "Till Date",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "3",
                "type": "text",
                "text": "Predicted",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "4",
                "type": "text",
                "text": dayVal1 + " Kg",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasEndY + 13"
            }, {
                "id": "5",
                "type": "text",
                "text": " of CO2",
                "fontSize": "12",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX + 40",
                "y": "$canvasEndY + 13"
            }, {
                "id": "6",
                "type": "text",
                "text": "5.9 Kg",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX - 41",
                "y": "$canvasEndY + 13"
            }, {
                "id": "7",
                "type": "text",
                "text": " of CO2",
                "fontSize": "12",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasEndY + 13"
            }]
        }]
    }
};




var monthVal1 = "36.4";


var sixth_chart_month = {
    "chart": {
        "showValues": "0",
        "showBorder": "0",
        "baseFontColor": "#FDFDFD",
        "baseFont": "Nunito Sans",
        "showTickMarks": "1",
        "showTickValues": "1",
        "pointerRadius": "1",
        "pointerBgAlpha": "1",
        "pointerBorderAlpha": "1",
        "gaugeFillMix": "{light+0}",
        //"numbersuffix":"nMol",
        "numbersuffix":"",
        "showValue": "1",
        "showGaugeBorder": "1",
        // margins
        "chartTopMargin": "70",
        "chartBottomMargin": "30",
        "chartLeftMargin": "20",
        "chartRightMargin": "20",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"
    },
    "colorRange": {
        "color": [{
            //Critical - Red
            "minValue": "0",
            "maxValue": "25",
            //"label": "Average",
            "code": "#FF6961"
        },
        {
            //Low - orange
            "minValue": "25.01",
            "maxValue": "49.99",
            "code": "#FFB347"
        },
        {
            //Sub-optimal - yellow
            //"minValue": monthVal1,
            "minValue": "50",
            "maxValue": "74.99",
            "code": "#F9EC61"
        },
        {
            //Optimal - green
            "minValue": "75",
            "maxValue": "250",
            "code": "#9BD888"
        },
        {
            //High - orange
            //"minValue": monthVal1,
            "minValue": "251",
            "maxValue": "325",
            "code": "#FFB347"
        }
        ]
    },
    "pointers": {
        "pointer": [{
            //"value": "monthVal1"
            "value": "30"
        }]
    },

    "annotations": {
        "groups": [{
            "items": [{
                "id": "1",
                "type": "text",
                "text": "Vitamin D",
                "fontSize": "16",
                "bold": "1",
                "color": "#FFFFFF",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 40"
            }, {
                "id": "2",
                "type": "text",
                //"text": "24/01/2021",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "3",
                "type": "text",
                "text": "nMol",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "4",
                "type": "text",
                //"text": monthVal1 + " Kg",
                "text": "",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasEndY + 13"
            }, {
                "id": "5",
                "type": "text",
                //"text": " of CO2",
                "text": "",
                "fontSize": "12",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX + 49",
                "y": "$canvasEndY + 13"
            }, {
                "id": "6",
                "type": "text",
                //"text": "181.8 Kg",
                "text": "",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX - 41",
                "y": "$canvasEndY + 13"
            }, {
                "id": "7",
                "type": "text",
                //"text": " of CO2",
                "text": "",
                "fontSize": "12",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasEndY + 13"
            }]
        }]
    }
};




var yearVal1 = "430.8";

var sixth_chart_year = {
    "chart": {
        "showValues": "0",
        "showTickMarks":"0",
        "showBorder": "0",
        "baseFontColor": "#FDFDFD",
        "baseFont": "Nunito Sans",
        "showTickMarks": "0",
        "showTickValues": "0",
        "pointerRadius": "0",
        "pointerBgAlpha": "0",
        "pointerBorderAlpha": "0",
        "gaugeFillMix": "{light+0}",
        "showValue": "0",
        "showGaugeBorder": "0",
        // margins
        "chartTopMargin": "70",
        "chartBottomMargin": "70",
        "chartLeftMargin": "20",
        "chartRightMargin": "20",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"
    },
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": yearVal1,
            "code": "#8C8C8C"
        },
        {
            "minValue": yearVal1,
            "maxValue": "2170.6",
            "code": "#48526F"
        }
        ]
    },
    "pointers": {
        "pointer": [{
            "value": yearVal1
        }]
    },

    "annotations": {
        "groups": [{
            "items": [{
                "id": "1",
                "type": "text",
                "text": "Emission",
                "fontSize": "16",
                "bold": "1",
                "color": "#FFFFFF",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 40"
            }, {
                "id": "2",
                "type": "text",
                "text": "Till Date",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "3",
                "type": "text",
                "text": "Predicted",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "4",
                "type": "text",
                "text": yearVal1 + " Kg",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasEndY + 13"
            }, {
                "id": "5",
                "type": "text",
                "text": " of CO2",
                "fontSize": "12",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX + 57",
                "y": "$canvasEndY + 13"
            }, {
                "id": "6",
                "type": "text",
                "text": "2170.6 Kg",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX - 41",
                "y": "$canvasEndY + 13"
            }, {
                "id": "7",
                "type": "text",
                "text": " of CO2",
                "fontSize": "12",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasEndY + 13"
            }]
        }]
    }
};



var chartConfigs6 = {
    type: "hlineargauge",
    id: "mychart6",
    dataFormat: "JSON",
    width: "100%",
    height: "147",
    dataSource: sixth_chart_month
};



export default chartConfigs6;

export { sixth_chart_today };

export { sixth_chart_month };


export { sixth_chart_year };
