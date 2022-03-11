// Creating the chart

let ctx = document.getElementById('my-chart').getContext('2d')

// create gradient
let gradient = ctx.createLinearGradient(0, 0, 0, 200)

gradient.addColorStop(0, "rgba(133, 205, 197, 1)")
gradient.addColorStop(1, "rgba(187, 223, 219, 0.5)")

let delayed;

const data =  {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
      label: 'Revenue',
      fill: true,
      data: [200000, 95000, 101000, 82000, 100000,125000, 155200, 120000, 210950,195800, 150000, 235000],
      backgroundColor:gradient,
      borderColor: '#18a999',
      tension: 0.4,
  }]
}

const options = {
  responsive: true,
  maintainAspectRatio : false,
  title: {
    display: true,
    text: "Revenue for the year 2020",
    fontSize: '18',
  },
  scales: {
      y: {
          beginAtZero: true,
          ticks:{
            callback: (value) => {
              return '$' + value
            }
          }
      }
  },
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default' && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  }
}

const config = {
  type: 'line',
  data: data,
  options : options,
}

const myChart = new Chart(ctx, config)

// Creating the hamburger menu
const closeBtn = document.getElementById('close-btn')
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('aside')
const themeToggler = document.querySelector('.theme')

// display sidebar
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block'
})

// close sidebar
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none'
})

// toggle theme
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')

  // toggle the active mode for the theme
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active-mode')
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active-mode')
})