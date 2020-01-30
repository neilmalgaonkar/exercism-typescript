export class ResistorColor {
  private colors: string[];
  private definedColors: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  constructor(colors: string[]) {
    this.colors = colors;
    if (this.colors.length < 2 ) {
      throw new Error("At least two colors need to be present");
    }
  }
  value(): number {
    let { 0: firstColor, 1: secondColor } = this.colors;
    let colorCode: string;
    colorCode = this.definedColors.indexOf(firstColor) + '' + this.definedColors.indexOf(secondColor);
    return +colorCode;
  }
}
