import Chart from 'chart.js';

export default {

    template: '<canvas width="400" height="50"></canvas>',

    props: ['labels', 'values','color'],

    ready() {
        var randomScalingFactor = function() {
            return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
        };
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function() {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
        };

        var barChartData = {
            labels: this.labels,
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: this.color,
                data: this.values
            }]
        };

        new Chart(this.$el.getContext("2d"), {
            type: 'line',
            data: barChartData
        });
    }
};
