
const data = {
     labels :[
          'tarek',
          'February',
          'March',
          'April',
          'May',
          'June',
        ],     datasets: [{
       label: 'My First dataset',
       backgroundColor: 'rgb(255, 99, 132)',
       borderColor: 'rgb(255, 99, 132)',
       data: [0, 10, 5, 2, 20, 30, 45],
     }]
   };
 
   const config = {
     type: 'line',
     data: data,
     options: {}
};
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
const data2 = {
     labels: [
       'Red',
       'Blue',
       'Yellow'
     ],
     datasets: [{
       label: 'My First Dataset',
       data: [300, 50, 100],
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)'
       ],
       hoverOffset: 4
     }]
};
const config2= {
     type: 'doughnut',
     data: data2,
};
const myChart2 = new Chart(
     document.getElementById('myChart2'),
     config2
);
 

