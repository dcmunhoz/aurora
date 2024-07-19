import { Component, input } from "@angular/core";

@Component({
  selector: "app-input",
  standalone: true,
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent {
  //#region Input properties
  public label = input("", { alias: "p-label" });
  public placeholder = input("", { alias: "p-placeholder" });

  //#endregion Input properties
}
