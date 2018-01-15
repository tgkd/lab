import Vue from 'vue';
import { mapGetters } from 'vuex';
import template from '@/templates/containers/setValuesPage.pug';
import Calc from '@/lib/calculate';
import paramNames from '@/lib/calcParams';

export default Vue.component('SetValuesPage', {
    template: template(),
    data() {
        return {
            msg: 'Set Values Page',
            data: null,
        };
    },

    computed: {
        ...mapGetters({
            params: 'defaultValues',
        }),
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
