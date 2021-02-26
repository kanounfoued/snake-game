import { UI } from "../Interface/UI";

const FieldUI = (width: number, height: number): HTMLElement => {
  const FieldDiv = document.createElement("div");
  FieldDiv.setAttribute("class", "field-container");
  FieldDiv.setAttribute("id", "field-container");
  FieldDiv.style.height = height + "px";
  FieldDiv.style.width = width + "px";
  return FieldDiv;
};

module.exports = class Field implements UI {
  private height: number;
  private width: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getHeight(): number {
    return this.height;
  }
  getWidth(): number {
    return this.width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  render(): HTMLElement | HTMLElement[] | null {
    return FieldUI(this.width, this.height);
  }
};

export {};
