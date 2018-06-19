import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {NgxEchartsService} from "ngx-echarts";

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.css']
})
export class EchartsComponent implements OnInit {

  showloading: boolean = true;
  public ZheJiangOpt;
  public data = [
    {name: '丽水市', value: [119.49105224609375, 28.24937385955666, 2], img: 's-success.png'},
    {name: '杭州市', value: [107.615944, 27.479744, 2], img: 's-success.png'},
    {name: '温州市', value: [107.615944, 27.479744, 2], img: 's-success.png'},
    {name: '宁波市', value: [107.615944, 27.479744, 2], img: 's-success.png'},
    {name: '舟山市', value: [107.615944, 27.479744, 2], img: 's-success.png'},
    {name: '台州市', value: [107.615944, 27.479744, 2], img: 's-success.png'},
    {name: '金华市', value: [119.63150024414061, 29.07957590059833, 2], img: 's-success.png'},
    {name: '衢州市', value: [118.84597778320312, 28.96369333786114, 2], img: 's-success.png'},
    {name: '绍兴市', value: [107.615944, 27.479744, 2], img: 's-success.png'},
    {name: '嘉兴市', value: [107.615944, 27.479744, 2], img: 's-success.png'},
    {name: '湖州市', value: [107.615944, 27.479744, 2], img: 's-success.png'}
  ];
  masterList = ["a","b","c","d","e","f","g","h","i"];
  items = [];
  currentPage:number = 1; // # of current page to show
  itemsPerPage:number = 3; // # of items per page
  maxSize:number = 3; // max # of page buttons to show at once
  totalItems:number; // total # of items

  constructor(public http: Http, private es: NgxEchartsService) {
    setTimeout(() => {
      this.showloading = false;
    }, 3000);
  }

  ngOnInit() {
    let _data = this.data;

    this.http.get('../assets/33.json').subscribe(result => {
      this.es.registerMap('浙江', result['_body']);
      this.ZheJiangOpt = {
        title: {
          text: '浙江省地图',
          subtext: '',
          sublink: '',
          left: 'center'
        },
        series: [
          {
            type: 'custom',
            coordinateSystem: 'geo',
            renderItem: function (params, api) {
              return {
                type: 'image',
                position: [-10, -10], // 平移，默认值为 [0, 0]。
                // scale: [2, 4], // 缩放，默认值为 [1, 1]。表示缩放的倍数。
                // rotation: Math.PI / 4, // 旋转，默认值为 0。表示旋转的弧度值。正值表示逆时针旋转。
                // origin: [10, 20], // 旋转和缩放的中心点，默认值为 [0, 0]。
                //https://www.w3cschool.cn/echarts_tutorial/echarts_tutorial-3u872dym.html
                style: {
                  image: "../assets/s-success.png",
                  x: api.coord([
                    _data[params.dataIndex].value[0], _data[params.dataIndex]
                      .value[1]
                  ])[0],
                  y: api.coord([
                    _data[params.dataIndex].value[0], _data[params.dataIndex]
                      .value[1]
                  ])[1]
                }
              };
            },
            data: _data
          }
        ],
        geo: {
          map: '浙江',
          roam: true,
          zoom: 1,
          itemStyle: {
            normal: {
              label: {show: true},
              // borderColor: '#387ba7',
              // shadowColor: 'rgba(0, 0, 0, 0.5)',
              // shadowBlur: 10,
              // shadowOffsetX: 10
            },
            emphasis: {
              // areaColor: '#b3f3f3'
            }
          }
        }
      };
    });

  }

  chartOption = {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {normal: {}},
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }

  Baroptions = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 335, name: '直达', selected: true},
          {value: 679, name: '营销广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [
          {value: 335, name: '直达'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1048, name: '百度'},
          {value: 251, name: '谷歌'},
          {value: 147, name: '必应'},
          {value: 102, name: '其他'}
        ]
      }
    ]
  }


  linkoption = {
    title: {
      text: '懒猫今日访问量'
    },
    color: ['#3398DB'],
    //气泡提示框，常用于展现更详细的数据
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    toolbox: {
      show: true,
      feature: {
        //显示缩放按钮
        dataZoom: {
          show: true
        },
        //显示折线和块状图之间的切换
        magicType: {
          show: true,
          type: ['bar', 'line']
        },
        //显示是否还原
        restore: {
          show: true
        },
        //是否显示图片
        saveAsImage: {
          show: true
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: [21231, 1212, 21231, 3213],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: 20
      },
    }],
    yAxis: [{
      name: "懒猫今日访问量",
      type: 'value'
    }],
    series: [{
      name: '今日访问次数',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true
        }
      },
      data: [21231, 1212, 21231, 3213]
    }]
  }


  datamapvalue = [
    {name: '海门', value: [121.15, 31.89, 9]},
    {name: '鄂尔多斯', value: [109.781327, 39.608266, 12]},
    {name: '招远', value: [120.38, 37.35, 12]},
    {name: '舟山', value: [122.207216, 29.985295, 12]},
    {name: '齐齐哈尔', value: [123.97, 47.33, 14]},
    {name: '盐城', value: [120.13, 33.38, 15]},
    {name: '赤峰', value: [118.87, 42.28, 16]},
    {name: '青岛', value: [120.33, 36.07, 18]},
    {name: '乳山', value: [121.52, 36.89, 18]},
    {name: '金昌', value: [102.188043, 38.520089, 19]}
  ];


  mapoption = {
    backgroundColor: '#404a59',
    title: {
      text: '全国主要城市空气质量',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      y: 'bottom',
      x: 'right',
      data: ['pm2.5'],
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#111'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: [
      {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: this.datamapvalue,
        symbolSize: function (val) {
          return val[2] / 10;
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      }
    ]
  };

  /*zMapOption = {
    title: {
      text: '浙江省地图',
      subtext: '',
      sublink: '',
      left: 'center'
    },
    series: [
      {
        name: '浙江省',
        type: 'map',
        map: '浙江',
      }
    ]
  };
  public onChartInit(e: any): void {
    debugger;
    console.log(e);
    // this.myChart = e.init(document.getElementById('echartMap'));
    this.http.get('../assets/33.json').subscribe(result => {
      console.log(result);
      e.registerMap('浙江', result);
    });
  }*/

}
