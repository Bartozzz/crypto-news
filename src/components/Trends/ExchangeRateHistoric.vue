<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,

  props: {
    data: Object
  },

  mounted () {
    this.renderChart(this.data, {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            type: "time",
            time: {
              unit: "minute"
            }
          }],
        },
    });
  }
}
</script>
