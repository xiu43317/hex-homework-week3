// 產品資料格式
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1", )
axios.defaults.headers.common['Authorization'] = token;
const url = 'https://vue3-course-api.hexschool.io/v2'; // 請加入站點
const path = 'rock'; // 請加入個人 API Path
createApp({
    data() {
        return {
            products: [],
            tempProduct: {}
        }
    },
    methods: {
        checkLogin() {
            axios.post(`${url}/api/user/check`).then((res) => {
                //console.log(res.data);
                this.getProducts();
            }).catch((error) => {
                //console.dir(error)
                location.href = './index.html';
            })
        },
        getProducts() {
            axios.get(`${url}/api/${path}/admin/products`)
                .then((res) => {
                    //console.log(res.data.products);
                    this.products = res.data.products;
                })
                .catch((error) => {
                    console.dir(error)
                })
        }
    },
    mounted() {
        this.checkLogin();
    }

}).mount('#app')