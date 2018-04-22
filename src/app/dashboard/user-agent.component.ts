import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { Data } from '../models/data';
declare let d3: any;

@Component({
    selector: 'user-agent',
    templateUrl: './user-agent.component.html'
})
export class UserAgentComponent {
    public options: any;
    public data: Array<Data> = new Array<Data>();

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.options =  {
            chart: {
                type: 'pieChart',
                height: 300,
                donut: true, //Turn on Donut mode. Makes pie chart look tasty!
                donutRatio: 0.45,//Configure how big you want the donut hole size to be
                x: (d) => d.label,
                y: (d) => d.value + (1e-10),
                showValues: true,
                valueFormat: (d) => {
                    return d3.format(',.0f')(d) + '%';
                },
                showLabels: true,  //Display pie keys
                keyThreshold: 0.05, //Configure the minimum slice size for keys to show up
                keyType: 'label', //Configure what type of data to show in the key. Can be 'key', 'value' or 'percent'
                labelsOutside: true, // put lables outside the pie chart
                showLegend: false, // hides the upper legend bar
            }
        };

        this.appService.getUserAgents().subscribe((data: Array<Data>) => this.data = data);
    }
}