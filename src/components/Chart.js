import Vue from 'vue';
import * as d3 from 'd3';
import template from '@/templates/components/chart.pug';

export default Vue.component('scatter-plot', {
    name: 'scatter-plot',
    template: template(),
    props: ['chartData', 'name'],
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const dataset = this.chartData;
            const w = 700;
            const h = 350;
            const padding = 60;

            // Define Scales
            const xScale = d3
                .scaleLinear()
                .domain([0, d3.max(dataset, d => d.x)])
                .range([padding, w - padding * 2]);
            const yScale = d3
                .scaleLinear()
                .domain([d3.min(dataset, d => d.y), d3.max(dataset, d => d.y)])
                .range([h - padding, padding]);
            // Define Axis
            const xAxis = d3.axisBottom().scale(xScale);

            const yAxis = d3
                .axisLeft()
                .scale(yScale)
                .ticks(5);
            // create svg
            const svg = d3
                .select(this.name)
                .append('svg')
                .attr('width', w)
                .attr('height', h);
            // function for creation of line
            const newline = d3
                .line()
                .x(d => xScale(d.x))
                .y(d => yScale(d.yhat));
            // cut off datapoints that are outside the axis
            svg
                .append('clipPath')
                .attr('id', 'chart-area')
                .append('rect')
                .attr('x', padding)
                .attr('y', padding)
                .attr('width', w - padding * 3)
                .attr('height', h - padding * 2);

            // append data points
            svg
                .append('g')
                .attr('id', 'circles')
                .attr('clip-path', 'url(#chart-area)')
                .selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')
                .attr('class', 'dot')
                .attr('cx', d => xScale(d.x))
                .attr('cy', d => yScale(d.y))
                .attr('r', 3.5);

            // append regression line
            svg
                .append('path')
                .datum(dataset)
                .attr('clip-path', 'url(#chart-area)')
                .attr('class', 'line')
                .attr('d', newline);

            // append Axes
            svg
                .append('g')
                .attr('class', 'x axis')
                .attr('transform', `translate(0,${h - padding})`)
                .call(xAxis);

            svg
                .append('g')
                .attr('class', 'y axis')
                .attr('transform', `translate(${padding},0)`)
                .call(yAxis);

            // text label for the x axis
            svg
                .append('text')
                .attr('transform', `translate(${w / 2} ,${h})`)
                .attr('y', -10)
                .style('text-anchor', 'middle')
                .text('Температура');

            // text label for the y axis
            svg
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 3)
                .attr('x', 0 - h / 2)
                .attr('dy', '1em')
                .style('text-anchor', 'middle')
                .text(`${this.name === '.chart-page__smoke' ? 'Дым' : 'Воздух'}, Дж/(м3*С)`);
        },
    },
});
