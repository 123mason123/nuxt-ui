<template>
  <ApexCharts
  type="area"
  height="160"
  :options="chartOptions"
  :series="series"
></ApexCharts>
</template>
 
<script setup lang="ts">
import ApexCharts from 'vue3-apexcharts';

const chartOptions = {
  chart: { type: 'area', height: 160, sparkline: { enabled: true } },
  stroke: { curve: 'straight' },
  fill: { opacity: 0.3 },
  yaxis: { min: 0 },
  colors: ['#DCE6EC'],
  title: { text: '$424,652', offsetX: 0, style: { fontSize: '24px' } },
  subtitle: { text: 'Sales', offsetX: 0, style: { fontSize: '14px' } },
}
const series = [
  {
    data: [
      53, 51, 62, 54, 37, 54, 19, 93, 24, 38, 35, 47, 27, 41, 43, 56, 65, 39,
      31, 46, 35, 45, 27, 61,
    ],
  },
]
</script>
