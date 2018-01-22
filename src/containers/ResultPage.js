/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import template from '@/templates/containers/resultPage.pug';
import { mapGetters } from 'vuex';
import Calc from '@/lib/calculate';
import paramNames from '@/lib/calcParams';

export default Vue.component('ResultPage', {
    template: template(),
    data() {
        return {
            msg: 'Результат',
            data: null,
        };
    },

    computed: {
        ...mapGetters(['params', 'values', 'chartAvgTempAir', 'chartAvgTempSmoke']),
    },

    mounted() {
        if (this.params) {
            const calc = new Calc(this.params);
            const propNames = Object.getOwnPropertyNames(Calc.prototype);
            this.data = propNames.filter(item => item !== 'constructor').map((prop, id) => ({
                name: paramNames[id],
                value: calc[prop]().toFixed(2),
            }));
        }
    },
});
