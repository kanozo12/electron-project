const {ipcRenderer} = require('electron');

window.addEventListener("load", ()=>{
    
});


// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


// getData();

// function getData() {

//     let client = require('cheerio-httpcli');
//     let url = 'https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20190101&end=20191201';
//     let param = {};

//     client.fetch(url, param, function (err, $, res) {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         $(".cmc-tab-historical-data .cmc-table__table-wrapper-outer:nth-child(3) .cmc-table-row").each(function (post) {
//             let t = $(this).children("td").eq(1).text();
//             xlables.push(t);
//             console.log(t);
//         });
//     });
// }
