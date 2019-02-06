var Calculation;
(function (Calculation) {
    var CalculationEngine = (function () {
        function CalculationEngine(initialAmount, monthlyAmount, timescaleInYears) {
            this.initialAmount = initialAmount;
            this.monthlyAmount = monthlyAmount;
            this.timescaleInYears = timescaleInYears;
        }
        CalculationEngine.prototype.calculateResults = function (growthRate) {
            var result = [];
            var currentValue = this.initialAmount;
            result.push(currentValue);
            for (var month = 1; month <= (this.timescaleInYears * 12); month++) {
                currentValue = currentValue * (1 + (growthRate / 12));
                currentValue = currentValue + this.monthlyAmount;
                result.push(currentValue);
            }
            return result;
        };
        CalculationEngine.prototype.highRiskResults = function () {
            return {
                invested: this.calculateResults(0),
                wideBandLowerLimit: this.calculateResults(-0.01),
                wideBandUpperLimit: this.calculateResults(0.07),
                narrowBandLowerLimit: this.calculateResults(0.02),
                narrowBandUpperLimit: this.calculateResults(0.04)
            };
        };
        CalculationEngine.prototype.mediumRiskResults = function () {
            return {
                invested: this.calculateResults(0),
                wideBandLowerLimit: this.calculateResults(0.00),
                wideBandUpperLimit: this.calculateResults(0.05),
                narrowBandLowerLimit: this.calculateResults(0.015),
                narrowBandUpperLimit: this.calculateResults(0.03)
            };
        };
        CalculationEngine.prototype.lowRiskResults = function () {
            return {
                invested: this.calculateResults(0),
                wideBandLowerLimit: this.calculateResults(0.01),
                wideBandUpperLimit: this.calculateResults(0.03),
                narrowBandLowerLimit: this.calculateResults(0.015),
                narrowBandUpperLimit: this.calculateResults(0.025)
            };
        };
        return CalculationEngine;
    })();
    Calculation.CalculationEngine = CalculationEngine;
})(Calculation || (Calculation = {}));
