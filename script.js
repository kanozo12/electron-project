var ctx = document.querySelector('#myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: [10, 20]
});
Chart.defaults.line.spanGaps = true;
