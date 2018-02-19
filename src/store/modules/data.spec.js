import { expect } from 'chai';
import store from './data';
import defaultParams from '../../lib/defaultParams';

describe('Test getters', () => {
    it('Check default params', () => {
        const state = {
            values: defaultParams,
        };
        const result = store.getters.params(state);
        expect(result).to.be.a('object');
    });

    it('Calculate chart data (Air)', () => {
        const result = store.getters.chartAvgTempAir();
        expect(result).to.be.a('array');
    });

    it('Calculate chart data (Smoke)', () => {
        const result = store.getters.chartAvgTempSmoke();
        expect(result).to.be.a('array');
    });

    it('Check saves list', () => {
        const result = store.getters.savesList();
        expect(result);
    });
});
