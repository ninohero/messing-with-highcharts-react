import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import Highchartsbullet from "highcharts/modules/bullet";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Paper from "@material-ui/core/Paper";

Highchartsbullet(Highcharts);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(60),
    },
  },
}));

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "My chart",
  },
  xAxis: {
    labels: {
      rotation: 70,
    },
    lineColor: "#cc0055",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 1, 6],
    },
  ],
};

var colors = Highcharts.getOptions().colors,
  categories = [
    "Chrome",
    "Firefox",
    "Internet Explorer",
    "Safari",
    "Edge",
    "Opera",
    "Other",
  ],
  data = [
    {
      y: 62.74,
      color: colors[2],
      drilldown: {
        name: "Chrome",
        categories: [
          "Chrome v65.0",
          "Chrome v64.0",
          "Chrome v63.0",
          "Chrome v62.0",
          "Chrome v61.0",
          "Chrome v60.0",
          "Chrome v59.0",
          "Chrome v58.0",
          "Chrome v57.0",
          "Chrome v56.0",
          "Chrome v55.0",
          "Chrome v54.0",
          "Chrome v51.0",
          "Chrome v49.0",
          "Chrome v48.0",
          "Chrome v47.0",
          "Chrome v43.0",
          "Chrome v29.0",
        ],
        data: [
          0.1,
          1.3,
          53.02,
          1.4,
          0.88,
          0.56,
          0.45,
          0.49,
          0.32,
          0.29,
          0.79,
          0.18,
          0.13,
          2.16,
          0.13,
          0.11,
          0.17,
          0.26,
        ],
      },
    },
    {
      y: 10.57,
      color: colors[1],
      drilldown: {
        name: "Firefox",
        categories: [
          "Firefox v58.0",
          "Firefox v57.0",
          "Firefox v56.0",
          "Firefox v55.0",
          "Firefox v54.0",
          "Firefox v52.0",
          "Firefox v51.0",
          "Firefox v50.0",
          "Firefox v48.0",
          "Firefox v47.0",
        ],
        data: [1.02, 7.36, 0.35, 0.11, 0.1, 0.95, 0.15, 0.1, 0.31, 0.12],
      },
    },
    {
      y: 7.23,
      color: colors[0],
      drilldown: {
        name: "Internet Explorer",
        categories: [
          "Internet Explorer v11.0",
          "Internet Explorer v10.0",
          "Internet Explorer v9.0",
          "Internet Explorer v8.0",
        ],
        data: [6.2, 0.29, 0.27, 0.47],
      },
    },
    {
      y: 5.58,
      color: colors[3],
      drilldown: {
        name: "Safari",
        categories: [
          "Safari v11.0",
          "Safari v10.1",
          "Safari v10.0",
          "Safari v9.1",
          "Safari v9.0",
          "Safari v5.1",
        ],
        data: [3.39, 0.96, 0.36, 0.54, 0.13, 0.2],
      },
    },
    {
      y: 4.02,
      color: colors[5],
      drilldown: {
        name: "Edge",
        categories: ["Edge v16", "Edge v15", "Edge v14", "Edge v13"],
        data: [2.6, 0.92, 0.4, 0.1],
      },
    },
    {
      y: 1.92,
      color: colors[4],
      drilldown: {
        name: "Opera",
        categories: ["Opera v50.0", "Opera v49.0", "Opera v12.1"],
        data: [0.96, 0.82, 0.14],
      },
    },
    {
      y: 7.62,
      color: colors[6],
      drilldown: {
        name: "Other",
        categories: ["Other"],
        data: [7.62],
      },
    },
  ],
  browserData = [],
  versionsData = [],
  i,
  j,
  dataLen = data.length,
  drillDataLen,
  brightness;

// Build the data arrays
for (i = 0; i < dataLen; i += 1) {
  // add browser data
  browserData.push({
    name: categories[i],
    y: data[i].y,
    color: data[i].color,
  });

  // add version data
  drillDataLen = data[i].drilldown.data.length;
  for (j = 0; j < drillDataLen; j += 1) {
    brightness = 0.2 - j / drillDataLen / 5;
    versionsData.push({
      name: data[i].drilldown.categories[j],
      y: data[i].drilldown.data[j],
      color: Highcharts.color(data[i].color)
        .brighten(brightness)
        .get(),
    });
  }
}

const options2 = {
  chart: {
    inverted: true,
    marginLeft: 135,
    type: "bullet",
    marginTop: 40,
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointPadding: 0.25,
      borderWidth: 0,
      color: "#000",
      targetOptions: {
        width: "200%",
      },
    },
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  title: {
    text: "2017 YTD",
  },
  xAxis: {
    categories: [
      '<span class="hc-cat-title">Revenue</span><br/>U.S. $ (1,000s)',
    ],
    plotLines: [
      {
        // mark the weekend
        color: "red",
        width: 2,
        value: 5,
        dashStyle: "longdashdot",
      },
    ],
    tickInterval: 24 * 3600 * 1000,
    // one day
    type: "datetime",
  },
  yAxis: {
    gridLineWidth: 0,
    plotBands: [
      {
        from: 0,
        to: 150,
        color: "#b3b",
      },
      {
        from: 150,
        to: 225,
        color: "#c5c",
      },
      {
        from: 225,
        to: 9e9,
        color: "#f2f",
        label: {
          text: "Fresh breeze",
          style: {
            color: "#606060",
          },
        },
      },
    ],
    title: null,
  },
  series: [
    {
      data: [
        {
          y: 275,
          target: 250,
        },
      ],
    },
  ],
  tooltip: {
    pointFormat: "<b>{point.y}</b> (with target at {point.target})",
  },
};

const options3 = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Browser market share, January, 2018",
  },
  subtitle: {
    text:
      'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
  },
  plotOptions: {
    pie: {
      shadow: false,
      center: ["50%", "50%"],
    },
  },
  tooltip: {
    valueSuffix: "%",
  },
  series: [
    {
      name: "Browsers",
      data: browserData,
      size: "60%",
      dataLabels: {
        formatter: function() {
          return this.y > 5 ? this.point.name : null;
        },
        color: "#ffffff",
        distance: -30,
      },
    },
    {
      name: "Versions",
      data: versionsData,
      size: "80%",
      innerSize: "60%",
      dataLabels: {
        formatter: function() {
          // display only if larger than 1
          return this.y > 1
            ? "<b>" + this.point.name + ":</b> " + this.y + "%"
            : null;
        },
      },
      id: "versions",
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 400,
        },
        chartOptions: {
          series: [
            {},
            {
              id: "versions",
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      },
    ],
  },
};

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={7}>
        <HighchartsReact highcharts={Highcharts} options={options3} />
      </Paper>
      <Paper elevation={5}>
        <FormControl>
          <InputLabel htmlFor="standard-basic">field label</InputLabel>
          <TextField
            id="standard-basic"
            label="the field"
            defaultValue="Hiya default!"
          />
        </FormControl>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Paper>
      <Paper elevation={1}>
        <HighchartsReact highcharts={Highcharts} options={options2} />
      </Paper>
    </div>
  );
};

render(<App />, document.getElementById("root"));
