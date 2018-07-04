import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyAppsRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { MyAppsCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { MyAppsLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { MyAppsDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { MyAppsTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { MyAppsEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { MyAppsJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { MyAppsJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MyAppsRegionMySuffixModule,
        MyAppsCountryMySuffixModule,
        MyAppsLocationMySuffixModule,
        MyAppsDepartmentMySuffixModule,
        MyAppsTaskMySuffixModule,
        MyAppsEmployeeMySuffixModule,
        MyAppsJobMySuffixModule,
        MyAppsJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppsEntityModule {}
