// 入口文件
import Vue from 'vue'

import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

import './lib/mui/css/mui.min.css'

import app from './app.vue'

var vm = new Vue({
    el:"#app",
    data:{

    },
    methods: {
        
    },
    render: function (createElement, context) {
        return createElement(app)
    }
})
