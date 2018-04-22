import { Component } from '@angular/core';
declare let d3: any;
import { AppService } from '../services/app.service';
import { Analytics } from '../models/analytics';

@Component({
    selector: 'skill-analytics',
    templateUrl: './skill-analytics.component.html'
})
export class SkillAnalyticsComponent {
    public options: any;
    public skills: Array<Analytics> = new Array<Analytics>();

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.options = {
            chart:
            {
                type: 'discreteBarChart',
                height: 300,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: (d) => d.label,
                y: (d) => d.value + (1e-10),
                showValues: true,
                valueFormat: (d) => {
                    return d3.format(',.0f')(d) + ' Yrs';
                },
                duration: 10,
                xAxis: {
                    axisLabel: 'My Skills'
                },
                yAxis: {
                    axisLabel: 'Experience (in Years)',
                    axisLabelDistance: -10
                }
            }
        };
        
        this.appService.getMySkillAnalytics().subscribe((data: Array<Analytics>) => this.skills = data);
    }
}