import axios from 'axios'
import config from './config'

export default class Api {
    constructor() {
        this.api = config.methods.data
        this.instance = axios.create({
            baseURL: config.backendUrl,
            timeout: 10000,
            withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    async getParams() {
        try {
            const result = await this.instance.request({
                method: this.api.getParams.method,
                url: this.api.getParams.url,
            })
            return result
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async setParams() {
        try {
            const result = await this.instance.request({
                method: this.api.setParams.method,
                url: this.api.setParams.url,
            })
            return result
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
