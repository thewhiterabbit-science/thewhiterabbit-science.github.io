require.config({

            paths: {

                echarts: './js'

            }

        });

        require(

            [

            'echarts',

            'echarts/chart/bar',
            'echarts/chart/line',

            ],

            function (ec) {

//Gráfica 1
var myChart = ec.init(document.getElementById('main'));
   myChart.setOption({
   title: {
        text: 'Staff working at',
        y: 40
    },
   tooltip : {
      show: false
        // trigger: 'axis',
        // formatter: "{b}<br/>{a}: {c}",
       // position: [0,0]
    },
    color: ['#4c275c','#a73266','#ec5a4a','#ffa600'],
    grid:{y:'80px',y2:'80px',x:'20',x2:'0', borderWidth: 0},
    legend: {
        data:['Production', 'Postproduction','Distribution', 'Exhibition'],
        // selectedMode: 'single',
        selected: {
          'Postproduction': false,
          'Distribution': false,
          'Exhibition': false, 
        },
        // x: 'center',
        y: 'top'
    },
    toolbox: {
        show : false,
    },
    calculable : true,
    xAxis : [
        {
          type : 'category',
          boundaryGap : [50, 0],
          axisLine : {    // 轴线
              show: true,
              lineStyle: {
                    color: '#989898',
                    type: 'solid',
                    width: 1
              }
           },
          axisTick : {    // 轴标记
             show:true,
              length: 3,
              // inside: true,
              lineStyle: {
                  color: '#989898',
                  type: 'solid',
                  width: 1
              }
          },
          splitLine : {
             show:false
          },
          splitArea : {
               show: true,
             },
           axisLabel:{
            rotate:70,
             textStyle: {
                 color: '#989898',
                 fontFamily: 'Roboto',
                 fontWeight: 300,
                 fontSize: 12,
                 baseline: 'middle'
              }
          },
          data :['0 to 5 ', '6 to 10 ', '11 to 30 ', '31 to 50 ', '51 to 100 ', '101 to 250', '251 and more'],
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale: true,
            // max: 8,
            axisLine : {    // 轴线
               show: false,
               lineStyle: {
                  color: '#fff',
               }
            },
            axisTick : {    // 轴标记
               show: false,
            },
            axisLabel : {
              rotate:0,
              // formatter: '{value}',
              show: true,
              margin: 5,
              textStyle: {
                  color: '#989898',
                  fontFamily: 'Roboto',
                  fontSize: 11,
                  fontWeight: 300,
              }
            },
            splitLine : {
             show:true,
               lineStyle: {
                  color: '#CBCBCB',
                  type: 'dashed',
                  width: 1
                }
          },
        }
    ],
    series : [
           {
              name:'Production', 
              type:'bar',
              data: [41, 8, 9, 1, 4, 0, 1],
            },
            {
              name:'Postproduction', 
              type:'bar',
              data: [19, 12, 12, 1, 2, 0, 0],
            },
            {
              name:'Distribution', 
              type:'bar',
              data: [3, 4, 2, 3, 4, 1, 1],
            },
            {
              name:'Exhibition', 
              type:'bar',
              data: [24, 7, 16, 42, 22, 4, 1],
            }    
    ]
  });
  var myChart2 = ec.init(document.getElementById('main2'));
  myChart2.setOption({
    title: {
        text: 'Year of registration',
        y: 40
    },
    tooltip : {
      show: false
        // trigger: 'axis',
        // formatter: "{b}<br/>{a}: {c}",
       // position: [0,0]
    },
    color: ['#4c275c','#a73266','#ec5a4a','#ffa600'],
    grid:{y:'80px',y2:'70px',x:'20',x2:'0', borderWidth: 0},
    legend: {
        data:['Production', 'Postproduction','Distribution', 'Exhibition'],
        // selectedMode: 'single',
        selected: {
          'Postproduction': false,
          'Distribution': false,
          'Exhibition': false, 
        },
        x: 'left',
        show: false,
    },
    toolbox: {
        show : false,
    },
    calculable : true,
    xAxis : [
        {
          type : 'category',
          boundaryGap : [50, 0],
          axisLine : {    // 轴线
              show: true,
              lineStyle: {
                    color: '#989898',
                    type: 'solid',
                    width: 1
              }
           },
          axisTick : {    // 轴标记
             show:true,
              length: 3,
              // inside: true,
              lineStyle: {
                  color: '#989898',
                  type: 'solid',
                  width: 1
              }
          },
          splitLine : {
             show:false
          },
          splitArea : {
               show: true,
             },
           axisLabel:{
            rotate:70,
             textStyle: {
                 color: '#989898',
                 fontFamily: 'Roboto',
                 fontWeight: 300,
                 fontSize: 12,
                 baseline: 'middle'
              }
          },
          data :[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale: true,
            // max: 8,
            axisLine : {    // 轴线
               show: false,
               lineStyle: {
                  color: '#fff',
               }
            },
            axisTick : {    // 轴标记
               show: false,
            },
            axisLabel : {
              rotate:0,
              // formatter: '{value}',
              show: true,
              margin: 5,
              textStyle: {
                  color: '#989898',
                  fontFamily: 'Roboto',
                  fontSize: 11,
                  fontWeight: 300,
              }
            },
            splitLine : {
             show:true,
               lineStyle: {
                  color: '#CBCBCB',
                  type: 'dashed',
                  width: 1
                }
          },
        }
    ],
    series : [
           {
              name:'Production', 
              type:'line',
              data: [19, 6, 13, 0, 17, 0, 3, 6, 0],
            },
            {
              name:'Postproduction', 
              type:'line',
              data: [18, 5, 4, 0, 12, 0, 10, 0, 0],
            },
            {
              name:'Distribution', 
              type:'line',
              data: [9, 2, 2, 0, 2, 0, 2, 0, 0],
            },
            {
              name:'Exhibition', 
              type:'line',
              data: [65, 2, 6, 2, 14, 0, 11, 5, 1],
            }    
    ]
  });

// myChart2 = ec.init(document.getElementById('main2'));
// myChart2.setOption(option2);

myChart.connect(myChart2);
myChart2.connect(myChart);

setTimeout(function (){
    window.onresize = function () {
        myChart.resize();
        myChart2.resize();
    }
},200)
// 
 });