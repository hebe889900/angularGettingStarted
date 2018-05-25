import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {}