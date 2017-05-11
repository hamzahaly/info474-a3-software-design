$(function() {
    var tasks = [
        {"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"Overwatch","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 04:56:32 EST 2012"),"endDate":new Date("Sun Dec 09 06:35:47 EST 2012"),"taskName":"Overwatch","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 06:29:53 EST 2012"),"endDate":new Date("Sun Dec 09 06:34:04 EST 2012"),"taskName":"Overwatch","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 05:35:21 EST 2012"),"endDate":new Date("Sun Dec 09 06:21:22 EST 2012"),"taskName":"Overwatch","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 05:00:06 EST 2012"),"endDate":new Date("Sun Dec 09 05:05:07 EST 2012"),"taskName":"Halo 5: Gaurdians","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 03:46:59 EST 2012"),"endDate":new Date("Sun Dec 09 04:54:19 EST 2012"),"taskName":"Super Smash Bros","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 04:02:45 EST 2012"),"endDate":new Date("Sun Dec 09 04:48:56 EST 2012"),"taskName":"Halo 5: Gaurdians","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 03:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 03:58:43 EST 2012"),"taskName":"Super Smash Bros","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 01:40:11 EST 2012"),"endDate":new Date("Sun Dec 09 03:26:35 EST 2012"),"taskName":"Overwatch","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 03:00:03 EST 2012"),"endDate":new Date("Sun Dec 09 03:09:51 EST 2012"),"taskName":"Halo 5: Gaurdians","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 01:21:00 EST 2012"),"endDate":new Date("Sun Dec 09 02:51:42 EST 2012"),"taskName":"Halo 5: Gaurdians","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 01:08:42 EST 2012"),"endDate":new Date("Sun Dec 09 01:33:42 EST 2012"),"taskName":"Overwatch","status":"FAILED"},
        {"startDate":new Date("Sun Dec 09 00:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 00:54:56 EST 2012"),"taskName":"Super Smash Bros","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 00:29:48 EST 2012"),"endDate":new Date("Sun Dec 09 00:44:50 EST 2012"),"taskName":"Halo 5: Gaurdians","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 07:39:21 EST 2012"),"endDate":new Date("Sun Dec 09 07:43:22 EST 2012"),"taskName":"Halo 5: Gaurdians","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 07:00:06 EST 2012"),"endDate":new Date("Sun Dec 09 07:05:07 EST 2012"),"taskName":"Super Smash Bros","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 08:46:59 EST 2012"),"endDate":new Date("Sun Dec 09 09:54:19 EST 2012"),"taskName":"Overwatch","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 09:02:45 EST 2012"),"endDate":new Date("Sun Dec 09 09:48:56 EST 2012"),"taskName":"Super Smash Bros","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 08:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 08:58:43 EST 2012"),"taskName":"Halo 5: Gaurdians","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 08:40:11 EST 2012"),"endDate":new Date("Sun Dec 09 08:46:35 EST 2012"),"taskName":"Super Smash Bros","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 08:00:03 EST 2012"),"endDate":new Date("Sun Dec 09 08:09:51 EST 2012"),"taskName":"Super Smash Bros","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 10:21:00 EST 2012"),"endDate":new Date("Sun Dec 09 10:51:42 EST 2012"),"taskName":"Super Smash Bros","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 11:08:42 EST 2012"),"endDate":new Date("Sun Dec 09 11:33:42 EST 2012"),"taskName":"Overwatch","status":"FAILED"},
        {"startDate":new Date("Sun Dec 09 12:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 12:54:56 EST 2012"),"taskName":"Overwatch","status":"SUCCEEDED"},
        {"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 00:26:13 EST 2012"),"taskName":"Super Smash Bros","status":"KILLED"}];

        var colors = ["#33b5e5", "#CC0000", "#669900", "#ffbb33"];
        var colors2 = ["#d0efc9", "#3cbe4a", "#ea26f8", "#26b6ac"];  
        var legend = true;
        var clicked = false;

        var ganttChart = GanttChart().statusColors(d3.schemeCategory20b)
            .displayLegend(false)
            .barHeight(80)
            .hoverEffect(true);

        var chartWrapper = d3.select("#viz").datum(tasks).call(ganttChart);

        $('#check').on('change', function() {
            legend = this.checked;
            console.log(this.checked);

            if (legend == true) {
                legend = false;
                ganttChart.displayLegend(false);
                chartWrapper = d3.select("#viz").data(tasks).call(ganttChart);
            } else {
                legend = true;
                ganttChart.displayLegend(true);
                chartWrapper = d3.select("#viz").data(tasks).call(ganttChart);
            };
        });

        $('#colorchange').on('click', function() {
            console.log(clicked);
            if (clicked) {
                clicked = false;
                ganttChart.statusColors(colors);
                chartWrapper = d3.select("#viz").data(tasks).call(ganttChart);
            } else {
                clicked = true;
                ganttChart.statusColors(colors2);
                chartWrapper = d3.select("#viz").data(tasks).call(ganttChart);
            };
        });
        chartWrapper.exit().remove();
    });