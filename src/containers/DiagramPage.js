/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import { mapGetters } from 'vuex';
import template from '@/templates/containers/diagramPage.pug';
import Chart from '../components/Chart';

export default Vue.component('DiagramPage', {
    template: template(),
    compoentns: {
        Chart,
    },
    computed: {
        ...mapGetters(['chartAvgTempAir', 'chartAvgTempSmoke']),
    },

    data() {
        return {};
    },
});
