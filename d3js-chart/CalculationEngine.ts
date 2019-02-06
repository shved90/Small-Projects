module Calculation {
    interface CalculationResult {
        invested: number[];
        wideBandLowerLimit: number[];
        wideBandUpperLimit: number[];
        narrowBandLowerLimit: number[];
        narrowBandUpperLimit: number[];
    }

    export class CalculationEngine {
        constructor(private initialAmount: number, private monthlyAmount: number, private timescaleInYears: number) {
        }

        calculateResults(growthRate: number): number[] {
            var result: number[] = [];
            var currentValue = this.initialAmount;

            result.push(currentValue);
            for (var month = 1; month <= (this.timescaleInYears * 12); month++) {
                currentValue = currentValue * (1 + (growthRate / 12));
                currentValue = currentValue + this.monthlyAmount;
                result.push(currentValue);
            }
            return result;
        }

        highRiskResults(): CalculationResult {
            return {
                invested: this.calculateResults(0),
                wideBandLowerLimit: this.calculateResults(-0.01),
                wideBandUpperLimit: this.calculateResults(0.07),
                narrowBandLowerLimit: this.calculateResults(0.02),
                narrowBandUpperLimit: this.calculateResults(0.04)
            }
        }

        mediumRiskResults(): CalculationResult {
            return {
                invested: this.calculateResults(0),
                wideBandLowerLimit: this.calculateResults(0.00),
                wideBandUpperLimit: this.calculateResults(0.05),
                narrowBandLowerLimit: this.calculateResults(0.015),
                narrowBandUpperLimit: this.calculateResults(0.03)
            }
        }

        lowRiskResults(): CalculationResult {
            return {
                invested: this.calculateResults(0),
                wideBandLowerLimit: this.calculateResults(0.01),
                wideBandUpperLimit: this.calculateResults(0.03),
                narrowBandLowerLimit: this.calculateResults(0.015),
                narrowBandUpperLimit: this.calculateResults(0.025)
            }
        }
    }
}
