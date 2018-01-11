export default class Calc {
    constructor(params) {
        this.params = params;
    }

    airTemp() {
        const { airHeat, delT } = this.params;
        return airHeat + delT;
    }

    averageAirTemp() {
        return this.airTemp() * (0.0001 + 1.289);
    }

    airEnth() {
        const { VAir, TAirStart } = this.params;
        return VAir * this.averageAirTemp() * ((this.airTemp() - TAirStart) / 3.6);
    }

    rateOfSmokeHeatLoss() {
        return this.airEnth() / ((100 - this.params.heatLoss) * 100);
    }

    averageVHeatSmokeGases() {
        return 0.0001 * (this.params.TSmoke + 1.41);
    }

    smokeEnthIncoming() {
        const { VSmoke, TSmoke } = this.params;
        return VSmoke * this.averageVHeatSmokeGases() * (TSmoke / 3.6);
    }

    smokeEnthOut() {
        return this.smokeEnthIncoming() - this.rateOfSmokeHeatLoss();
    }

    smokeTOut() {
        const { VSmoke, TSmoke } = this.params;
        // eslint-disable-next-line
        return this.smokeEnthOut() * 3.6 / (VSmoke * ((TSmoke - this.airTemp()) * 0.0001 + 1.41));
    }

    logAvgTempStart() {
        return this.params.TSmoke - this.airTemp();
    }

    logAvgTempEnd() {
        return this.smokeTOut() - this.params.TAirStart;
    }

    logAvgTempDiff() {
        const start = this.logAvgTempStart();
        const end = this.logAvgTempEnd();
        return (start - end) / Math.log(start - end);
    }

    airChannelsSize() {
        const { NAir, SAir } = this.params;
        return NAir * SAir;
    }

    smokeChannelsSize() {
        const { NSmoke, SSmoke } = this.params;
        return NSmoke * SSmoke;
    }

    realAirSpeed() {
        return this.params.VAir / 3600 / this.airChannelsSize();
    }

    realSmokeSpeed() {
        return this.params.VSmoke / 3600 / this.smokeChannelsSize();
    }

    smokeHeatCoeff() {
        const { B, n } = this.params;
        // eslint-disable-next-line
        return 1.163 * (B * this.realSmokeSpeed() ** n);
    }

    airHeatCoeff() {
        const { B, n } = this.params;
        // eslint-disable-next-line
        return 1.163 * (B * this.realAirSpeed() ** n);
    }

    heatCoeff() {
        const air = this.airHeatCoeff();
        const smoke = this.smokeHeatCoeff();
        // eslint-disable-next-line
        return air * smoke / (air + smoke);
    }

    heatSurface() {
        return this.airEnth() / this.heatCoeff() / this.logAvgTempDiff();
    }

    getChannelsCount() {
        const { NAir, channelsCount } = this.params;
        return NAir * channelsCount;
    }

    result() {
        return this.getChannelsCount() * this.params.S;
    }
}
