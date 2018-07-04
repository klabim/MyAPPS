import { NgModule } from '@angular/core';

import { MyAppsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MyAppsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MyAppsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MyAppsSharedCommonModule {}
