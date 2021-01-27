//import moment from 'moment';
//var dayDetail = moment().format('MMMM, Do YYYY');
var dayVal2 = "0.73";
var seventh_chart_today = {
    "chart": {
        "showValues": "0",
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
        "chartTopMargin": "50",
        "chartBottomMargin": "20",
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
            "maxValue": dayVal2,
            "code": "#92C35F"
        },
        {
            "minValue": dayVal2,
            "maxValue": "1.56",
            "code": "#48526F"
        }
        ]
    },
    "pointers": {
        "pointer": [{
            "value": dayVal2
        }]
    },

    "annotations": {
        "groups": [{
            "items": [
            //     {
            //     "id": "1",
            //     "type": "text",
            //     "text": dayDetail,
            //     "align": "left",
            //     "font": "Nunito Sans",
            //     "bold": "0",
            //     "fontSize": "14",
            //     "color": "#FDFDFD",
            //     "x": "$chartStartX + 15",
            //     "y": "$chartEndY - 20"
            // },
             {
                "id": "2",
                "type": "text",
                "text": "Green Energy Generated",
                "fontSize": "16",
                "bold": "1",
                "color": "#FFFFFF",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 40"
            }, {
                "id": "3",
                "type": "text",
                "text": "Goal",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "4",
                "type": "text",
                "text": dayVal2 + " kWh",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasEndY + 13"
            }, {
                "id": "5",
                "type": "text",
                "text": "1.6 kWh",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasEndY + 13"
            }]
        }]
    }

};
//var monthDetail = moment().format('MMMM YYYY');
var monthVal2 = "21.20";
var seventh_chart_month = {
    "chart": {
        "showValues": "0",
        "showBorder": "0",

        "baseFontColor": "#FDFDFD",
        "baseFont": "Nunito Sans",
        "showTickMarks": "0",
        "showTickValues": "0",
        //"pointerRadius": "0",
        //"pointerBgAlpha": "0",
        //"pointerBorderAlpha": "0",
        "gaugeFillMix": "{light+0}",
        "showValue": "0",
        "showGaugeBorder": "0",
        // margins
        "chartTopMargin": "50",
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
            "minValue": "80",
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

    "annotations": {
        "groups": [{
            "items": [
            //     {
            //     "id": "1",
            //     "type": "text",
            //     "text": monthDetail,
            //     "align": "left",
            //     "font": "Nunito Sans",
            //     "bold": "0",
            //     "fontSize": "14",
            //     "color": "#FDFDFD",
            //     "x": "$chartStartX + 15",
            //     "y": "$chartEndY - 20"
            // },
            {
                "id": "1",
                "type": "text",
                "text": "24/01/2021",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 10"
            }, 
            {
                "id": "2",
                "type": "text",
                "text": "Testosterone",
                "fontSize": "16",
                "bold": "1",
                "color": "#FFFFFF",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 40"
            }, {
                "id": "3",
                "type": "text",
                "text": "Goal",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "4",
                "type": "text",
                "text": "0",
                //"fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasEndY + 13"
            },
            {
                "id": "4",
                "type": "text",
                "text": "25",
                //"fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX + 20",
                "y": "$canvasEndY + 13"
            },
            {
                "id": "5",
                "type": "text",
                "text": "250",
                //"fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX - 95",
                "y": "$canvasEndY + 13"
            },
            {
                "id": "5",
                "type": "text",
                "text": "325",
                //"fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasEndY + 13"
            }]
        }]
    }

};




//var yearDetail = moment().format('YYYY');
var yearVal2 = "260";
var seventh_chart_year = {
    "chart": {
        "showValues": "0",
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
        "chartTopMargin": "50",
        "chartBottomMargin": "85",
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
            "maxValue": yearVal2,
            "code": "#92C35F"
        },
        {
            "minValue": yearVal2,
            "maxValue": "50",
            "code": "#48526F"
        }
        ]
    },
    "pointers": {
        "pointer": [{
            "value": yearVal2
        }]
    },

    "annotations": {
        "groups": [{
            "items": [
            //     {
            //     "id": "1",
            //     "type": "text",
            //     "text": yearDetail,
            //     "align": "left",
            //     "font": "Nunito Sans",
            //     "bold": "0",
            //     "fontSize": "14",
            //     "color": "#FDFDFD",
            //     "x": "$chartStartX + 15",
            //     "y": "$chartEndY - 20"
            // },
             {
                "id": "2",
                "type": "text",
                "text": "Green Energy Generated",
                "fontSize": "16",
                "bold": "1",
                "color": "#FFFFFF",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasStartY - 40"
            }, {
                "id": "3",
                "type": "text",
                "text": "Goal",
                "fontSize": "11",
                "bold": "0",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasStartY - 10"
            }, {
                "id": "4",
                "type": "text",
                "text": yearVal2 + " kWh",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Left",
                "x": "$canvasStartX",
                "y": "$canvasEndY + 13"
            }, {
                "id": "5",
                "type": "text",
                "text": "600 kWh",
                "fontSize": "13",
                "bold": "1",
                "color": "#FDFDFD",
                "align": "Right",
                "x": "$canvasEndX",
                "y": "$canvasEndY + 13"
            }]
        }]
    }

};

var chartConfigs7 = {
    type: "hlineargauge",
    id: "mychart10",
    dataFormat: "JSON",
    width: "100%",
    height: "90",
    dataSource: seventh_chart_month
};

export default chartConfigs7;

export { seventh_chart_today };
export { seventh_chart_month };
export { seventh_chart_year };