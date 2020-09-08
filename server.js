var http = require('http');
var express = require('express');
var fs = require('fs');
var event = require('events');


http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world');
}) 
fs.readFile('./test.txt', function(err, data) {
    // console.log('sync data ===========>', data.toString());
});
var data2 = fs.readFileSync('./test.txt', 'utf-8');

var eventEmmiter = new event.EventEmitter();

var connectHandler = function (){
    console.log('触发连接事件');
    eventEmmiter.emit('data_received');
}

eventEmmiter.on('connect', connectHandler);

eventEmmiter.on('data_received', function(){
    console.log('数据接收完成');
})

eventEmmiter.emit('connect');
console.log('程序执行完成')