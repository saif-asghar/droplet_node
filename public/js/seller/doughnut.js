let ctx = document.getElementById("myChart").getContext("2d");
const productCategoriesForDoughnut = document.querySelectorAll('.productCategoriesForDoughnut');
// let ctx2 = document.getElementById("myChart2").getContext("2d");
// let ctx3 = document.getElementById("myChart3").getContext("2d");


let stringForLabels = [];

productCategoriesForDoughnut.forEach(function(category){  
  stringForLabels.push((category.innerHTML));
})

let stringForData = {};

stringForLabels.forEach(function (p, i) {
  stringForData[p] = (stringForData[p] || 0) + 1;
});

let newStringForLabels = new Set(stringForLabels);
newStringForLabels = [...newStringForLabels];


Chart.defaults.global.defaultFontColor = "#888";
Chart.defaults.global.maintainAspectRatio = true;

let t = "0.55";

let myChart = new Chart(ctx, {
  plugins: [
    {
      beforeInit: function(chart) {
        chart.legend.afterFit = function() {
          this.height = this.height + 20;
        };
      }
    }
  ],
  type: "pie",

  data: {
    labels: newStringForLabels,
    datasets: [
      {
        label: "languages",
        backgroundColor: [
          `rgba(241, 224, 90, ${t})`,
          `rgb(86, 61, 124, ${t})`,
          `rgb(227, 76, 38, ${t})`,
          `rgb(44, 62, 80, ${t})`,
          `rgb(43, 116, 137, ${t})`,
          `rgb(97, 51, 224, ${t})`,
          `rgb(16, 41, 324, ${t})`,
          `rgb(26, 71, 290, ${t})`,
          `rgb(56, 81, 104, ${t})`,
          `rgb(36, 69, 294, ${t})`,
          `rgb(46, 91, 194, ${t})`,
          `rgb(66, 11, 184, ${t})`,
          `rgb(76, 70, 174, ${t})`,
          `rgb(21, 81, 224, ${t})`,
          `rgb(26, 91, 324, ${t})`,
          `rgb(29, 11, 424, ${t})`,
          `rgb(99, 21, 524, ${t})`,
          `rgb(79, 31, 624, ${t})`,
          `rgb(32, 41, 724, ${t})`,
          `rgb(64, 51, 824, ${t})`
        ],
        borderColor: [
          `rgba(241, 224, 90, ${Number(t) + 0.3})`,
          `rgb(86, 61, 124, ${Number(t) + 0.3})`,
          `rgb(227, 76, 38, ${Number(t) + 0.3})`,
          `rgb(44, 62, 80, ${Number(t) + 0.3})`,
          `rgb(43, 116, 137, ${Number(t) + 0.3})`,
          `rgb(97, 51, 224, ${Number(t) + 0.3})`,
          `rgb(16, 41, 324, ${Number(t) + 0.3})`,
          `rgb(26, 71, 290, ${Number(t) + 0.3})`,
          `rgb(56, 81, 104, ${Number(t) + 0.3})`,
          `rgb(36, 69, 294, ${Number(t) + 0.3})`,
          `rgb(46, 91, 194, ${Number(t) + 0.3})`,
          `rgb(66, 11, 184, ${Number(t) + 0.3})`,
          `rgb(76, 70, 174, ${Number(t) + 0.3})`,
          `rgb(21, 81, 224, ${Number(t) + 0.3})`,
          `rgb(26, 91, 324, ${Number(t) + 0.3})`,
          `rgb(29, 11, 424, ${Number(t) + 0.3})`,
          `rgb(99, 21, 524, ${Number(t) + 0.3})`,
          `rgb(79, 31, 624, ${Number(t) + 0.3})`,
          `rgb(32, 41, 724, ${Number(t) + 0.3})`,
          `rgb(64, 51, 824, ${Number(t) + 0.3})`
        ],
        borderWidth: 2,
        data: Object.values(stringForData),
        barThickness: 30
      }
    ]
  },
  options: {
    cutoutPercentage: 65,
    legend: {
      display: true,
      position: "top",
      align: "center",
      labels: {
        boxWidth: 7,
        padding: 14,
        usePointStyle: true
      }
    },
    tooltips: {
      mode: "point",
      titleFontColor: "black",
      bodyFontColor: "black",
      backgroundColor: "#eee"
    }
  }
});


// let myChart2 = new Chart(ctx2, {
//   plugins: [
//     {
//       beforeInit: function(chart) {
//         chart.legend.afterFit = function() {
//           this.height = this.height + 20;
//         };
//       }
//     }
//   ],
//   type: "pie",

//   data: {
//     labels: ["Python", "Swift", "Objective-C", "Java", "Others", "CSS"],
//     datasets: [
//       {
//         label: "languages",
//         backgroundColor: [
//           `rgba(241, 224, 90, ${t})`,
//           `rgb(86, 61, 124, ${t})`,
//           `rgb(227, 76, 38, ${t})`,
//           `rgb(44, 62, 80, ${t})`,
//           `rgb(43, 116, 137, ${t})`,
//           `rgb(86, 61, 124, ${t})`
//         ],
//         borderColor: [
//           "#f1e05a",
//           "#563d7c",
//           "#e34c26",
//           "#2c3e50",
//           "#2b7489",
//           "#563d7c"
//         ],
//         borderWidth: 2.4,
//         data: [6, 6, 4, 3, 3, 2],
//         barThickness: 30
//       }
//     ]
//   },
//   options: {
//     cutoutPercentage: 65,
//     // responsive: false,
//     // scales: {
//     //   yAxes: [
//     //     {
//     //       ticks: {
//     //         beginAtZero: true
//     //       }
//     //     }
//     //   ]
//     // },
//     legend: {
//       display: true,
//       position: "top",
//       align: "center",
//       labels: {
//         boxWidth: 7,
//         padding: 14,
//         usePointStyle: true
//       }
//     },
//     tooltips: {
//       mode: "point",
//       titleFontColor: "black",
//       bodyFontColor: "black",
//       backgroundColor: "#eee"
//     }
//   }
// });

// let myChart3 = new Chart(ctx3, {
//   plugins: [
//     {
//       beforeInit: function(chart) {
//         chart.legend.afterFit = function() {
//           this.height = this.height + 20;
//         };
//       }
//     }
//   ],
//   type: "pie",

//   data: {
//     labels: ["Python", "Swift", "Objective-C", "Java", "Others", "CSS"],
//     datasets: [
//       {
//         label: "languages",
//         backgroundColor: [
//           `rgba(241, 224, 90, ${t})`,
//           `rgb(86, 61, 124, ${t})`,
//           `rgb(227, 76, 38, ${t})`,
//           `rgb(44, 62, 80, ${t})`,
//           `rgb(43, 116, 137, ${t})`,
//           `rgb(86, 61, 124, ${t})`
//         ],
//         borderColor: [
//           "#f1e05a",
//           "#563d7c",
//           "#e34c26",
//           "#2c3e50",
//           "#2b7489",
//           "#563d7c"
//         ],
//         borderWidth: 2.4,
//         data: [6, 6, 4, 3, 3, 2],
//         barThickness: 30
//       }
//     ]
//   },
//   options: {
//     cutoutPercentage: 65,
//     // responsive: false,
//     // scales: {
//     //   yAxes: [
//     //     {
//     //       ticks: {
//     //         beginAtZero: true
//     //       }
//     //     }
//     //   ]
//     // },
//     legend: {
//       display: true,
//       position: "top",
//       align: "center",
//       labels: {
//         boxWidth: 7,
//         padding: 14,
//         usePointStyle: true
//       }
//     },
//     tooltips: {
//       mode: "point",
//       titleFontColor: "black",
//       bodyFontColor: "black",
//       backgroundColor: "#eee"
//     }
//   }
// });
