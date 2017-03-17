/**
 * 主页面应用设置
 * auth: liyangli
 * date: 17/3/17 下午11:27 .
 */
"use strict";

Vue.component('todo-item',{
    props: ['names'],
    template: '<ol><li v-for="name in names">{{name}}</li></ol>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!',
        seen: true,
        names: ['liyangli','lyl','liyl']
    },
    methods: {
        changeMsg: function(){
            sendMessage();
        }
    }
});

//webSocket测试
var ws = new WebSocket("ws://23.105.201.193:8181");
ws.onopen = function(e){
    console.log('Connection to server opened');
};

function sendMessage(){
    ws.send("liyangli clicent send");
}