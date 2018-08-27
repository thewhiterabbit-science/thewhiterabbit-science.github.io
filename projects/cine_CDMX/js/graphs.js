require.config({

            paths: {

                echarts: './js'

            }

        });

        require(

            [

            'echarts',

            'echarts/chart/bar',

            ],

            function (ec) {

  //Gráfica 1
  var myChart = ec.init(document.getElementById('main'));
   myChart.setOption({

    tooltip : {
        trigger: 'axis',
        // formatter: "{b}<br/>{a}: {c}",
       // position: [0,0]
    },
    color: ['#4ad200'],
    grid:{y:'80px',y2:'130px',x:'20',x2:'0', borderWidth: 0},
    legend: {
        data:['Cicloestaciones','Metro','Metrobús', 'Ferrocarril Suburbano', 'Nochebús y corredores concesionados','Red de Transporte de Pasajeros (RTP)', 'Trolebús'],
        selectedMode: 'single',
        selected: {
          'Metro': false,
          'Metrobús': false,
          'Ferrocarril Suburbano': false, 
          'Nochebús y corredores concesionados': false,
          'Red de Transporte de Pasajeros (RTP)': false,
          'Trolebús': false,
        },
        x: 'left'
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
          data : ['Buenavista', 'Juárez', 'Centro', 'Roma Norte', 'Hipódromo', 'Roma Sur', 'Narvarte Poniente', 'Tabacalera', 'Del Valle Centro', 'Del Valle Sur'],
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
              name:'Cicloestaciones', 
              type:'bar',
              data: [12, 25, 31, 38, 19, 15, 13, 6, 14, 23],
            },
            {
              name:'Metro', 
              type:'bar',
              data: [3, 2, 10, 1, 1, 1, 3, 1, 1, 1],
            },
            {
              name:'Metrobús', 
              type:'bar',
              data: [8, 5, 64, 5, 5, 3, 3, 10, 1, 0],
            },
            {
              name:'Ferrocarril Suburbano', 
              type:'bar',
              data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            {
              name:'Nochebús y corredores concesionados', 
              type:'bar',
              data: [3, 4, 0, 6, 6, 3, 0, 4, 1, 1],
            },
            {
              name:'Red de Transporte de Pasajeros (RTP)', 
              type:'bar',
              data: [20, 21, 19, 13, 4, 0, 0, 4, 0, 12],
            },
            {
              name:'Trolebús', 
              type:'bar',
              data: [0, 0, 10, 12, 2, 0, 0, 0, 0, 8],
            }            
    ]


   });
   //
  var myChart2 = ec.init(document.getElementById('main2'));
   myChart2.setOption({

    tooltip : {
        trigger: 'axis',
        formatter: "{b}<br/>{a}: ${c}",
       // position: [0,0]
    },
    color: ['#3FB8AF'],
    grid:{y:'40px',y2:'150px',x:'60',x2:'0', borderWidth: 0},
    legend: {
        data:['Venta','Renta' ],
        selectedMode: 'single',
        selected: {
          'Renta': false,
        },
        x: 'left'
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
          data : ['Buenavista', 'Juárez', 'Centro', 'Roma Norte', 'Hipódromo', 'Roma Sur', 'Narvarte Poniente', 'Tabacalera', 'Del Valle Centro', 'Del Valle Sur'],
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
              formatter: '${value}',
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
              name:'Venta', 
              type:'bar',
              data: [1065030, 3861838.131, 1320000, 4927587.5, 5349020, 3793070, 2780810, 4500000, 3717570, 3850000],
            },
            {
              name:'Renta', 
              type:'bar',
              data: [8500, 28126.61017, 12875, 22750, 24556, 17813, 13500, 22154, 15625, 17900],
            },

            
    ]


   });
// 
 });