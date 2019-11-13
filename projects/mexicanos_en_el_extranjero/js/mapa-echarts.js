  require.config({

            paths: {

                echarts: './js'

            }

        });

        require(

            [

            'echarts',

            'echarts/chart/map',

            'echarts/chart/bar',

            ],

            function (ec) {

			//Gráfica 1.
              var myChart = ec.init(document.getElementById('main'));
              

              myChart.setOption({
              color:['#9631d9'],
              tooltip : {
                  trigger: 'item',
                  formatter: '{b}',
                  zlevel: 2
              },
              //  title : {
              //     text: 'World Population (2010)',
              //     subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
              //     sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
              //     x:'center',
              //     y:'top'
              // }
              series : [
                    {
                    name: 'Residentes extranjeros de 60 años o más: ',
                    type: 'map',
                    mapType: 'world',
                    roam: true , //zoom
                    hoverable: false,
                    data:[ ],
                    itemStyle: {
                        normal: {
                          borderColor:'#fff',
                          borderWidth: 0.5,
                          areaStyle:{color: '#ccc'},

                        }
                    },
                    // lineas 
                    markLine : {
                        smooth:true,
                        zlevel: 99,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 70,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                borderColor:'#9631d9',
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10,
                                },

                            label: {show: false},

                          },

                        },
                        data : [
                            [{name:'Mexico'},{name:'Estados Unidos'}],
                            [{name:'Mexico'},{name:'Canadá'}],
                            [{name:'Mexico'},{name:'España'}],
                            [{name:'Mexico'},{name:'Guatemala'}],
                            [{name:'Mexico'},{name:'Alemania'}],
                            [{name:'Mexico'},{name:'Italia'}],
                            [{name:'Mexico'},{name:'Brasil'}],
                            [{name:'Mexico'},{name:'Reino Unido'}],
                            [{name:'Mexico'},{name:'Paraguay'}],
                            [{name:'Mexico'},{name:'Costa Rica'}],
                            [{name:'Mexico'},{name:'Países Bajos'}],
                            [{name:'Mexico'},{name:'Cuba'}],
                            [{name:'Mexico'},{name:'Bolivia'}],
                            [{name:'Mexico'},{name:'Francia'}],
                            [{name:'Mexico'},{name:'Israel'}],
                            [{name:'Mexico'},{name:'Venezuela'}],
                            [{name:'Mexico'},{name:'Belice'}],
                            [{name:'Mexico'},{name:'Panamá'}],
                            [{name:'Mexico'},{name:'Colombia'}],
                            [{name:'Mexico'},{name:'Perú'}],
                            [{name:'Mexico'},{name:'Suecia'}],
                            [{name:'Mexico'},{name:'Chile'}],
                            [{name:'Mexico'},{name:'Argentina'}],
                            [{name:'Mexico'},{name:'Japón'}],
                            [{name:'Mexico'},{name:'Suiza'}],
                            [{name:'Mexico'},{name:'El Salvador'}],
                            [{name:'Mexico'},{name:'Emiratos Árabes Unidos'}],
                            [{name:'Mexico'},{name:'Honduras'}],
                            [{name:'Mexico'},{name:'Dinamarca'}],
                            [{name:'Mexico'},{name:'Ecuador'}],
                            [{name:'Mexico'},{name:'Bélgica'}],
                        ]
                        },
                        geoCoord: {
                          'Mexico': [-99.133209, 19.432608],
                          'Estados Unidos': [-95.71289, 37.09024],
                          'Canadá': [-106.34677, 56.13036],
                          'España': [-3.74922, 40.46366],
                          'Guatemala': [-89.8988087, 15.6356088],
                          'Alemania': [10.45152, 51.16569],
                          'Italia': [12.674297, 42.6384261],
                          'Brasil': [-53.2, -10.3333333],
                          'Reino Unido': [-3.9614184, 55.367],
                          'Paraguay': [ -58.1693445, -23.3165935],
                          'Costa Rica': [-84.0739102, 10.2735633],
                          'Países Bajos': [5.5412468, 52.2476498],
                          'Cuba': [-77.78116, 21.52175],
                          'Bolivia': [-64.9912286, -17.0568696],
                          'Francia': [2.21374, 46.22763],
                          'Israel': [35.0015196, 30.8760272],
                          'Venezuela': [-66.58973, 6.42375],
                          'Belice': [-88.7600927, 16.8259793],
                          'Panamá': [-81.1308434, 8.559559],
                          'Colombia': [-74.29733, 4.57086],
                          'Suecia': [14.5208584, 59.6749712],
                          'Chile': [-71.3187697, -31.7613365],
                          'Argentina': [-63.61667, -38.41609],
                          'Japón': [139.2394179, 36.5748441],
                          'Suiza': [8.2319736, 46.7985624],
                          'El Salvador': [-88.89652, 13.79418],
                          'Emiratos Árabes Unidos': [53.9994829, 24.0002488],
                          'Honduras': [-86.2419, 15.19999],
                          'Dinamarca': [10.3333283, 55.670249],
                          'Ecuador': [-79.3666965, -1.3397668],
                          'Bélgica': [4.6667145, 50.6402809],
                          'Perú': [-75.0458515, -6.8699697],
                        },

                    // datos
                    markPoint : {
                        symbol:'emptyCircle',
                        // symbolSize : function (v){
                        //     return 10 + v/10
                        // },
                        
                        symbolSize: 0,
                        effect : {
                            show: false,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{
                                  show:false,
                                  textStyle: {
                                      color: '#ff1d3b',
                                      baseline: 'top',
                                      fontFamily: 'Roboto',
                                      fontSize: 11,
                                      fontWeight: 300
                                  }
                                },
                            },
                          emphasis: {
                            label: {
                                show: false,
                                position: 'outer'
                            }
                          },  
                        },
                        data : [
                            {name:'Estados Unidos', value: 41000000},
                            {name:'Canadá', value: 61505},
                            {name:'España', value: 21399},
                            {name:'Guatemala', value: 11481},
                            {name:'Alemania', value: 9225},
                            {name:'Italia', value: 6798},
                            {name:'Brasil', value: 6625},
                            {name:'Paraguay', value: 4187},
                            {name:'Costa Rica', value: 4131},
                            {name:'Países Bajos', value: 3040},
                            {name:'Cuba', value: 2752},
                            {name:'Bolivia', value: 9377},
                            {name:'Francia', value: 4601},
                            {name:'Israel', value: 4252},
                            {name:'Venezuela', value: 3075},
                            {name:'Belice', value: 2349},
                            {name:'Panamá', value: 2299},
                            {name:'Colombia', value: 2286},
                            {name:'Perú', value: 2133},
                            {name:'Suecia', value: 1977},
                            {name:'Chile', value: 1874},
                            {name:'Argentina', value: 1729},
                            {name:'Japón', value: 1645},
                            {name:'Suiza', value: 1478},
                            {name:'El Salvador', value: 1350},
                            {name:'Emiratos Árabes Unidos', value: 1228},
                            {name:'Honduras', value: 1114},
                            {name:'Dinamarca', value: 976},
                            {name:'Ecuador', value: 937},
                            {name:'Bélgica', value: 893},
                        ]
                    }
                },

                // }
                ]
            //fin         
        });
			//
        // });
  //Gráfica 2
  var myChart2 = ec.init(document.getElementById('main2'));
   myChart2.setOption({

    tooltip : {
        trigger: 'axis',
        formatter: '{b} : {c}'
    },
    color:['#9631d9'],
    grid:{y:'0',y2:'90px',x:'90px',x2:'20px', borderWidth: 0},

    calculable : true,
    xAxis : [
        {
          type :  'value',
          position: 'bottom',
          boundaryGap : [0, 0.01],
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
              inside: true,
              lineStyle: {
                  color: '#989898',
                  type: 'solid',
                  width: 1
              }
          },
          splitLine : {
             show: false,
          },
          splitArea : {
             show: false,
          },
           axisLabel:{
            rotate:45,
             textStyle: {
                 color: '#989898',
                 fontFamily: 'Roboto',
                 fontStyle: 'light',
                 fontSize: 14,
              }
          },
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : [ 'Canadá', 'España', 'Guatemala','Alemania', 'Italia', 'Brasil', 'Paraguay', 'Costa Rica', 'Países Bajos', 'Cuba', 'Bolivia', 'Francia', 'Israel', 'Venezuela', 'Belice', 'Panamá', 'Colombia', 'Perú', 'Suecia', 'Chile', 'Argentina', 'Japón', 'Suiza', 'El Salvador', 'Emiratos Árabes Unidos', 'Honduras', 'Dinamarca', 'Ecuador', 'Bélgica'],
            position: 'left',
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
              show: true,
              textStyle: {
                  color: '#989898',
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  fontStyle: 'light',
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
             splitArea : {
               show: false,
             }
        }
    ],
    series : [
        {
            name:' ',
            type:'bar',
            data:[ 61505, 21399, 11481, 9225, 6798, 6625, 4187, 4131, 3040, 2752, 9377, 4601, 4252, 3075, 2349, 2299, 2286, 2133, 1977, 1874, 1729, 1645, 1478, 1350, 1228, 1114, 976, 937, 893],
            barWidth: 5,
            barGap: '3%',
        }
    ]


   });
   //
 });