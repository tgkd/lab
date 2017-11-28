export default {
    methods: {
        data: {
            getParams: {
                url: '/api/data/get_params',
                method: 'get',
            },
            setParams: {
                url: '/api/data/set_params',
                method: 'post',
            },
        },
    },
    backendUrl: 'http://localhost:3030',
}
