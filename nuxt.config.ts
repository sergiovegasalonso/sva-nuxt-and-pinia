export default defineNuxtConfig({
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore', // import { defineStore } from 'pinia'
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
    ],
})