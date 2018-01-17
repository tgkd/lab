import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import template from '@/templates/containers/setValuesPage.pug';

export default Vue.component('SetValuesPage', {
    template: template(),
    data() {
        return {
            msg: 'Расчетные параметры',
            paramValues: [],
        };
    },

    computed: {
        ...mapGetters(['params', 'paramNames', 'values']),
    },

    methods: {
        ...mapActions(['setNewParams']),

        calcClick() {
            this.setNewParams(this.paramValues);
            this.$router.push({ name: 'ResultPage' });
        },

        changeHandler(e) {
            const param = e.target.id.slice(6);
            const value = parseFloat(e.target.value);
            this.paramValues[param].value = value;
        },
    },

    mounted() {
        this.paramValues = this.values;
    },
});
