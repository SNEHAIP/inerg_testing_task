
 //method 1
export class ChartPage {
  constructor(page) {
    this.page = page;

    // dropdown
    this.stateDropdown = page.locator('select');

    // chart container
    this.chartContainer = page.locator('svg.main-svg').last();

    // line chart possible points (circle OR path fallback)
    this.chartPoints = page.locator('svg circle, svg path');
  }

  async selectState(stateName) {
    await this.stateDropdown.selectOption({ label: stateName });
  }

  async printChartValues() {

    await this.chartContainer.waitFor({ state: 'visible' });
    await this.chartContainer.scrollIntoViewIfNeeded();

    const count = await this.chartPoints.count();
    console.log(`\nTotal chart elements found: ${count}\n`);

    const results = [];

    // limit to avoid overload
    const limit = Math.min(count, 10);

    for (let i = 0; i < limit; i++) {

      const el = this.chartPoints.nth(i);

      const box = await el.boundingBox();

      if (!box) continue;

      // move mouse to trigger hover
      await this.page.mouse.move(
        box.x + box.width / 2,
        box.y + box.height / 2
      );

      await this.page.waitForTimeout(600);

      // SAFE capture (works even if tooltip selector fails)
      const text = await this.page.locator('body').innerText();

      // try extracting meaningful number-like data
      const cleaned = text
        .replace(/\s+/g, ' ')
        .trim()
        .match(/(\d+(\.\d+)?)/g); // extracts numbers

      if (cleaned) {
        const value = cleaned.join(', ');

        if (!results.includes(value)) {
          results.push(value);
          console.log(`Point ${i + 1} ➜ ${value}`);
        }
      }
    }

    console.log("\n Final Extracted Values:");
    console.log(results);
  }
}





















/*
export class ChartPage {
  constructor(page) {
    this.page = page;

    this.chartElement = page.locator('svg path'); // or your XPath
    this.tooltip = page.locator('.hoverlayer, .plotly-tooltip, [role="tooltip"]');
  }

  async hoverOnElement() {
    await this.chartElement.first().hover();
  }

  async isTooltipVisible() {
    return this.tooltip.first().isVisible();
  }
}


*/
