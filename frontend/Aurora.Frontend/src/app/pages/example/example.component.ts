import { Component } from "@angular/core";
import { InputComponent } from "@UIKit/input/input.component";
// import { InputComponent } from "ui/components/input/input.component";
// import { InputComponent } from "../../../ui/components/input/input.component";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [InputComponent],
  templateUrl: "example.component.html"
})
export class ExampleComponent {}
