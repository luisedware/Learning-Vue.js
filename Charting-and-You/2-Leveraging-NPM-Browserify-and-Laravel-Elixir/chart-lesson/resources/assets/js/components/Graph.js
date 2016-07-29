import Chart from 'chart.js';

export default {

    template: `
        <div>
            <canvas width="400" height="50" v-el:canvas></canvas>
            <div class="legend">{{{legend}}}</div>
        </div>
    `,

    props: {
        labels: {},
        values: {},
        color: {
            default: 'rgba(220,220,220,0.2)'
        }
    },

    data() {
        return { legend: '' }
    },

    ready() {


        var data = {
            labels: this.labels,
            datasets: [{
                label: 'Monthly Points',
                data: this.values,
                backgroundColor: 'red'
            }, {
                label: 'Hello Wrold',
                data: [20, 82, 9],
                backgroundColor: 'green'
            }]
        };

        const chart = new Chart(this.$els.canvas.getContext("2d"), {
            type: 'line',
            data: data
        });

        this.legend = chart.generateLegend();
    }
};
