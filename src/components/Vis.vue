<template>
  <full-page ref="fullpage" :options="options">
    <div class="section">
      <div class="content">
        <el-image
            :src="require('../assets/item2.png')"
            class="animate__animated animate__fadeIn"
            fit="cover"
            style="float:right;height: 160px;">
        </el-image>
        <div class="animate__animated animate__fadeIn">
          <div class="title">数读唐诗三百首，览尽诗意岁月长</div>
          <div class="sub-title">——基于唐诗的可视化分析</div>
        </div>
        <div class="desc animate__animated animate__fadeIn animate__delay-1s">
          唐诗，是中华文化宝库中的一颗明珠，同时也对当今中国人的生活，以及世界上许多国家的文化发展产生了很大影响，对于后人研究唐代的政治、民情、风俗、文化等都具有重要的参考意义。<br/>在我们的可视化项目中，我们将从不同的维度分析来自《唐诗三百首》的唐诗。通过分析唐诗文本，用户可以通过可视化的方式了解诗人的生平以及唐朝国家实力与社会风气的变化。同时，通过分析各种诗歌意象，用户可以直观地了解到诗歌意象与主题情感的联系，同时展示古代的诗歌如何对今天人们的生活产生深远的影响。
        </div>
      </div>
    </div>
    <div class="section">
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="18">
            <el-radio v-model="radio1" label="1" size="small">全本</el-radio>
            <el-radio v-model="radio1" label="2" size="small">按风格</el-radio>
            <el-radio v-model="radio1" label="3" size="small">按诗人</el-radio>
            <div class="grid-content">
              <div v-if="radio1==='1'">
                <el-image
                    fit="fit"
                    src="http://47.114.107.254:5000/visdata_view/query/get_image/word/1/0"
                    style="width: 100%; height: 400px"></el-image>
              </div>
              <div v-if="radio1==='2'">
                <el-row :gutter="20">
                  <el-col v-for="n in 8" :span="6">
                    <el-image
                        :src="'http://47.114.107.254:5000/visdata_view/query/get_image/word/1/'+n"
                        fit="contain"
                        style="width: 100%;"></el-image>
                    <div>{{ classification[n - 1] }}</div>
                  </el-col>
                </el-row>
              </div>
              <div v-if="radio1==='3'">
                <el-row :gutter="10">
                  <el-col v-for="n in 6" :span="8">
                    <el-image
                        :src="'http://47.114.107.254:5000/visdata_view/query/get_image/word/2/'+n"
                        fit="contain"
                        style="width: 100%;"></el-image>
                    <div>{{ poet[n - 1] }}</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="page-desc">
                “草木皆有情，词即人生。”<br/>唐代在玄宗年间由盛转衰，处在不同年代的诗人，也有了不同的人生基调，我们不仅可以透过唐诗中的词语，看到唐代诗人的内心情感，还可以看到他们的人生经历，再向更广的纬度延展，我们也能够看到朝代的浪潮如何吹拂过生命的浮沉。
              </div>
              <el-image
                  :src="require('../assets/item1.png')"
                  fit="contain"
                  style="margin-top: 30px;height: 100px;"></el-image>
            </div>
          </el-col>
        </el-row>
        <div class="chart-title">图一  《唐诗三百首》词语词云图</div>
      </div>
    </div>
    <div class="section">
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content">
              <div class="page-desc">
                “无我之境也。有我之境，以我观物，故物皆著我之色彩。无我之境，以物观物，故不知何者为我，何者为物。”<br/>唐诗多工于运用意象，具有高超的借物抒怀水准。万水千山走遍，冷暖人情历尽，叩问本心才是诗人的真性情。因而诗人们常常沉思，有时还挟带着现世的种种忧愁，在山水草木之间，安放的是诗人们无处施展的情感。
              </div>
              <el-image
                  :src="require('../assets/item1.png')"
                  fit="contain"
                  style="margin-top: 30px;height: 100px;"></el-image>
            </div>
          </el-col>
          <el-col :span="18">
            <el-radio v-model="radio2" label="1" size="small">全本</el-radio>
            <el-radio v-model="radio2" label="2" size="small">按风格</el-radio>
            <el-radio v-model="radio2" label="3" size="small">按诗人</el-radio>
            <div class="grid-content">
              <div v-if="radio2==='1'">
                <el-image
                    fit="fit"
                    src="http://47.114.107.254:5000/visdata_view/query/get_image/imagery/1/0"
                    style="width: 100%; height: 400px"></el-image>
              </div>
              <div v-if="radio2==='2'" id="sheet5">
                <el-row :gutter="20">
                  <el-col v-for="n in 8" :span="6">
                    <el-image
                        :src="'http://47.114.107.254:5000/visdata_view/query/get_image/imagery/1/'+n"
                        fit="contain"
                        style="width: 100%;"></el-image>
                    <div>{{ classification[n - 1] }}</div>
                  </el-col>
                </el-row>
              </div>
              <div v-if="radio2==='3'" id="sheet6">
                <el-row :gutter="10">
                  <el-col v-for="n in 6" :span="8">
                    <el-image
                        :src="'http://47.114.107.254:5000/visdata_view/query/get_image/imagery/2/'+n"
                        fit="contain"
                        style="width: 100%;"></el-image>
                    <div>{{ poet[n - 1] }}</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="chart-title">图二  《唐诗三百首》意象词云图</div>
      </div>
    </div>
    <div class="section">
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="12">
            <div id="sheet7" class="grid-content" style="width: 100%;height: 400px"></div>
          </el-col>
          <el-col :span="12">
            <div id="sheet8" class="grid-content" style="width: 100%;height: 400px"></div>
          </el-col>
        </el-row>
        <div class="chart-title">图三  《唐诗三百首》收录诗歌体裁与题材的对应</div>
      </div>
    </div>
    <div class="section">
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="16">
            <div id="sheet9" class="grid-content" style="width: 100%;height: 550px"></div>
            <div class="chart-title">图四  时期、诗人、诗歌的关系图</div>
          </el-col>
          <el-col :span="8">
            <el-row>
              <el-col :span="24">
                <div id="sheet12" class="grid-content" style="width: 100%;height: 350px"></div>
                <div class="chart-title">图五  诗人创作诗歌的情感分布</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div id="sheet10" class="grid-content" style="width: 100%;height: 200px"></div>
                <div class="chart-title">图六  诗人创作的诗歌的题材、体裁分布</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </full-page>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import axios from "axios";

require("echarts/theme/vintage")
export default {
  name: "Vis",
  data() {
    return {
      classification: ['咏物诗', '叙事诗', '山水田园诗', '边塞诗', '离别诗', '爱情诗', '咏怀咏史诗', '酬唱诗'],
      poet: ['李白', '王维', '杜甫', '李商隐', '孟浩然', '韦应物'],
      poet_data: [],
      curPoet: "",
      curPoetIndex: 0,
      data10: [],
      data11: [],
      data1: [],
      data7: [],
      data8: [],
      data12: [],
      data9: {
        nodes: [],
        links: [],
        categories: [{
          name: "时期"
        }, {
          name: "诗人"
        }, {
          name: "体裁"
        }, {
          name: "题材"
        }],
      },
      radio1: '1',
      radio2: '1',
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //是否显示导航，默认为false
        //为每个section设置背景色
        sectionsColor: [
          "#fef8ef",
          "#fef8ef",
          "#fef8ef",
          "#fef8ef",
          "#fef8ef"
        ],
      }
    }
  },
  mounted() {
    axios("api/visdata_view/query/get_author10").then(res => {
      this.poet_data = res.data
    })
    axios("api/visdata_view/query/get_counts/classification/type").then(res => {
      var result = []
      for (let i = 0; i < res.data.length; i++) {
        var item = {
          name: res.data[i].father,
          children: []
        }
        for (let j = 0; j < res.data[i].children.length; j++) {
          item.children.push({
            name: res.data[i].children[j].children,
            value: res.data[i].children[j].number
          })
        }
        result.push(item)
      }
      this.data7 = result
      this.initSheet7()
    })
    axios("api/visdata_view/query/get_counts/type/classification").then(res => {
      var result = []
      for (let i = 0; i < res.data.length; i++) {
        var item = {
          name: res.data[i].father,
          children: []
        }
        for (let j = 0; j < res.data[i].children.length; j++) {
          item.children.push({
            name: res.data[i].children[j].children,
            value: res.data[i].children[j].number
          })
        }
        result.push(item)
      }
      this.data8 = result
      this.initSheet8()
    })
    axios("api/visdata_view/query/get_relation/time/author/type").then(res => {
      var nodes = [];
      var links = [];
      var year_id = []
      var id = 0;
      for (let i = 0; i < res.data.length; i++) {
        let poets = res.data[i].poets
        var node1 = {
          id: id,
          name: res.data[i].time,
          category: 0,
          symbolSize: 20
        }
        year_id.push(id)
        id = id + 1
        nodes.push(node1)
        for (let j = 0; j < poets.length; j++) {
          let categories = poets[j].categories
          var node2 = {
            id: id,
            name: poets[j].author,
            category: 1,
            symbolSize: 20
          }
          id = id + 1
          nodes.push(node2)
          links.push({
            source: node1.id,
            target: node2.id
          })
          var pie = {
            author: node2.name,
            data: [[], []]
          }
          for (let k = 0; k < categories.length; k++) {
            let category = categories[k]
            var node3 = {
              id: id,
              name: node2.name + "作的" + category.category,
              category: (category.flag === 1) ? 3 : 2,
              symbolSize: 20 + category.number * 3
            }
            pie.data[(category.flag === 1) ? 0 : 1].push({name: category.category, value: category.number})
            id = id + 1
            nodes.push(node3)
            links.push({
              source: node2.id,
              target: node3.id
            })
          }
          this.data10.push(pie)
        }
      }
      links.push({
        source: year_id[0],
        target: year_id[1]
      })
      links.push({
        source: year_id[1],
        target: year_id[2]
      })
      links.push({
        source: year_id[2],
        target: year_id[3]
      })
      links.push({
        source: year_id[3],
        target: year_id[0]
      })
      this.data9.nodes = nodes
      this.data9.links = links
      this.initSheer9()
      this.initSheet10()
    })
    axios("api/visdata_view/query/get_scatter/author/emotion").then(res => {
      for (let i = 0; i < res.data.length; i++) {
        var tmp = []
        for (let j = 0; j < res.data[i].emotion.length; j++) {
          tmp.push([res.data[i].emotion[j], this.poet.indexOf(res.data[i].author)])
        }
        var item = {
          name: res.data[i].author,
          type: 'scatter',
          symbleSize: 10,
          data: tmp
        }
        this.data12.push(item)
      }
      this.initSheet12()

    })
  },
  methods: {
    initSheet12() {
      let myChart = echarts.init(document.getElementById('sheet12'), 'vintage')
      var option = {
        grid: {
          left: 80,
        },
        xAxis: {
          type: 'value',
          boundaryGap: false,
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          }
        },
        tooltip: {
          formatter: function (params, ticket, callback) {
            return params.marker + " " + params.name + " " + params.value[0]
          }
        },
        yAxis: {
          type: 'category',
          data: this.poet,
          axisLine: {
            show: false
          }
        },
        series: this.data12
      }
      myChart.setOption(option)
    },
    initSheet10() {
      let myChart = echarts.init(document.getElementById('sheet10'), 'vintage')
      var option = {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['15%', '30%'],
            label: {
              position: 'outside',
              formatter: '{b|{b} }{c}{per|首}',
              backgroundColor: 'rgba(0,0,0,0.05)',
              // borderColor: '#8C8D8E',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: '#6E7079',
                  lineHeight: 22,
                  align: 'center'
                },
                b: {
                  color: '#d7ab82',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33
                }
              }
            },
            data: this.data10[this.curPoetIndex].data[1]
          },
          {
            name: 'Access From',
            type: 'pie',
            radius: ['45%', '60%'],
            label: {
              position: 'outside',
              formatter: '{b|{b} }{c}{per|首}  ',
              backgroundColor: 'rgba(0,0,0,0.05)',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: '#6E7079',
                  lineHeight: 22,
                  align: 'center'
                },
                b: {
                  color: '#6e7074',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33
                }
              }
            },
            data: this.data10[this.curPoetIndex].data[0]
          }
        ]
      };
      myChart.setOption(option)
    },
    initSheer9() {
      let myChart = echarts.init(document.getElementById('sheet9'), 'vintage')
      var that = this
      var option = {
        legend: {},
        tooltip: {
          position: [10, 10],
          show: true,
          extraCssText: 'width:300px; white-space:pre-wrap',
          backgroundColor: "rgba(0,0,0,0.05)",
          formatter: function (params, ticket, callback) {
            if (params.dataType === "edge") {
              return null
            }
            if (params.data.category === 1) {
              that.curPoetIndex = that.poet.indexOf(params.data.name)
              that.curPoet = params.data.name
              for (let i = 0; i < that.data12.length; i++) {
                that.data12[i].type = 'scatter'
                if (that.data12[i].name === params.data.name) {
                  that.data12[i].type = 'effectScatter'
                }
              }
              that.initSheet12()
              that.initSheet10()
            }
            if (params.data.category === 2 || params.data.category === 3) {
              return params.marker + " " + params.data.name + " " + (params.data.symbolSize - 20) / 3 + "首"
            } else if (params.data.category === 1) {
              var name = "<div style='font-weight:bold'>" + that.poet_data[that.curPoetIndex].author + "</div>"
              var img = "<img src='https://www.shicimingju.com" + that.poet_data[that.curPoetIndex].paragraph.substring(1) + "'>"
              var info = "<div style='width:300px'>" + that.poet_data[that.curPoetIndex].info + "</div>"
              return name + "<br>" + img + "<br>" + info

              // "+that.poet_data[that.curPoetIndex].paragraph.substring(1)+"
            } else {
              return params.marker + " " + params.data.name
            }
          }
        },
        series: {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: this.data9.nodes,
          width: '25%',
          height: '25%',
          roam: true,
          draggable: true,
          force: {
            repulsion: 100,
            edgeLength: 100
          },
          label: {
            show: false
          },
          edges: this.data9.links,
          categories: this.data9.categories
        }
      };
      myChart.setOption(option);
    },
    initSheet8() {
      var myChart = echarts.init(document.getElementById('sheet8'), 'vintage');
      var option = {
        tooltip: {
          show: true
        },
        series: [
          {
            type: 'sunburst',
            data: this.data8,
            radius: [0, '90%'],
            label: {
              show: false
            }
          }
        ]
      }
      myChart.setOption(option)
    },
    initSheet7() {
      let myChart = echarts.init(document.getElementById('sheet7'), 'vintage')
      var option = {
        tooltip: {
          show: true
        },
        series: [
          {
            data: this.data7,
            type: 'sunburst',
            radius: [0, '90%'],
            label: {
              show: false
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 50px;
  line-height: 60px;
  font-size: 40px;
  font-weight: bolder;
}

.sub-title {
  font-size: 30px;
  line-height: 40px;
}

.page-desc {
  font-size: 18px;
  line-height: 30px;
}

.desc {
  font-size: 18px;
  line-height: 30px;
  margin: 100px;
}

.content {
  padding: 20px;
  font-family: "SimSun", fangsong;
}

.chart-title {
  font-weight: bolder;
  font-size: 15px;
  margin-top: 5px;
}

</style>
