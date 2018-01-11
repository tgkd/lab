/* eslint-disable */
import Vue from 'vue';
import template from '@/templates/containers/setValuesPage.pug';
import Calc from '@/lib/calculate';

export default Vue.component('SetValuesPage', {
    template: template(),
    data() {
        return {
            msg: 'Set Values Page',
            params: {
                VSmoke: 1330,
                VAir: 1340,
                airHeat: 300,
                TAirStart: 20,
                TSmoke: 750,
                delT: 20,
                heatLoss: 10,
                CSmoke: 1.47,
                I: 880,
                SAir: 0.008,
                SSmoke: 0.042,
                S: 0.25,
                NAir: 9,
                NSmoke: 3,
                channelsCount: 4,
                B: 17,
                n: 1.03
            },
            data: null
        };
    },

    created: function() {
        const calc = new Calc(this.params);
        const propNames = Object.getOwnPropertyNames(Calc.prototype);
        const results = propNames.map(prop => {
            if (prop === 'constructor') return null;
            return {[prop]: calc[prop]()};
        });
        console.log(results)
        this.data = results;
    },
});
