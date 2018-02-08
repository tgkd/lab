import Vue from 'vue';
import { mapGetters, mapActions, mapState } from 'vuex';
import moment from 'moment';
import 'moment/locale/ru';
import template from '@/templates/containers/setValuesPage.pug';

moment.locale('ru');

export default Vue.component('SetValuesPage', {
    template: template(),
    data() {
        return {
            msg: 'Расчетные параметры',
            paramValues: [],
        };
    },

    computed: {
        ...mapState({
            values: state => state.data.values,
        }),
        ...mapGetters(['params', 'paramNames', 'modalIsVisible']),

        disabled() {
            return !!this.paramValues.filter(el => el.error).length;
        },
    },

    methods: {
        ...mapActions(['setNewParams', 'setModalVisible', 'addNewSave', 'getSavesList']),

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
            this.addNewSave({
                id: Math.floor(Math.random() * 1000),
                data,
                date: moment().format('DD MMMM YYYY HH:mm'),
            });
            this.$router.push({ name: 'ResultPage' });
        },

        modalVisible() {
            this.getSavesList();
            this.setModalVisible(true);
        },

        changeHandler(e) {
            const name = e.target.id.slice(6);
            const value = parseFloat(e.target.value);
            const param = this.paramValues[name];
            if (!value || value < param.min || value > param.max) {
                param.error = true;
            } else {
                param.error = false;
            }
            param.value = value;
        },
    },

    watch: {
        values(newVal) {
            this.paramValues = newVal.map(param => ({ ...param, error: false }));
        },
    },

    mounted() {
        this.paramValues = this.values;
        this.paramValues = this.paramValues.map(param => ({ ...param, error: false }));
    },
});
