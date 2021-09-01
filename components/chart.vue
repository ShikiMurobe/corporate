<script>
import { HorizontalBar } from 'vue-chartjs';
export default {
  props:["items"],
  extends: HorizontalBar,
  name: 'chart',
  data(){
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: "スキルレベル",
            data: [],
            borderWidth: 1,
            backgroundColor: "#f6aa00",
            xAxisID: 'level-x',
          },
          {
            label: "経験年数",
            data: [],
            borderWidth: 1,
            backgroundColor: "#03af7a",
            xAxisID: 'year-x',
          },
        ],
      },
      options:{
        responsive: true,
        maintainAspectRatio: false,
        scales:{
          xAxes:[
            {
              id: "level-x",
              position: "top",
              ticks:{
                beginAtZero: true,
                max: 5,
                stepSize: 1,
              }
            },
            {
              id: "year-x",
              position: "bottom",
              type: "linear", 
              ticks:{
                beginAtZero: true,
                max: 10,
                stepSize: 2,
                callback: (value) => `${value}年`,
              }
            },
          ],
        }
        // scales:{
        //   xAxes: [
        //     {
        //       // ticks: {
        //       //   beginAtZero: true,
        //       //   min: 0,
        //       //   max: 5,
        //       //   stepSize: 1,
        //       // }
        //     },
        //     {
        //       // ticks: {
        //       //   beginAtZero: true,
        //       //   min: 0,
        //       //   max: 5,
        //       //   stepSize: 1,
        //       // }
        //     },
        //   ]
        // }
      },
    }
  },
  mounted () {
    this.setData(this.items)
    this.renderChart(this.data, this.options)
  },
  methods:{
    setData(items){
      items.map(item => {
        this.data.labels.push(item.title)
        this.data.datasets[0].data.push(item.level)
        this.data.datasets[1].data.push(item.years)
      })
    },
  }
}
</script>