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
        ...mapGetters(['params', 'paramNames', 'values', 'modalIsVisible']),

        disabled() {
            return !!this.paramValues.filter(el => el.error).length;
        },
    },

    methods: {
        ...mapActions(['setNewParams', 'setModalVisible']),

        calcClick() {
            if (this.disabled) return;
            const data = this.paramValues.map(item => ({
                id: item.id,
                name: item.name,
                value: item.value,
                min: item.min,
                max: item.max,
            }));
            this.setNewParams(data);
            this.$router.push({ name: 'ResultPage' });
        },

        modalVisible() {
            this.setModalVisible(true);
        },

        changeHandler(e) {
            const name = e.target.id.slice(6);
            const value = parseFloat(e.target.value);
            const param = this.paramValues[name];
            if (!value || value <= param.min || value >= param.max) {
                param.error = true;
            } else {
                param.error = false;
            }
            param.value = value;
        },
    },

    mounted() {
        this.paramValues = this.values;
        this.paramValues = this.paramValues.map(param => ({ ...param, error: false }));
    },
});
