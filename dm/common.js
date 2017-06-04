/**
 * Created by Administrator on 2017/3/21.
 */

function getDates(dt) {
    var str = "";//存储时间的字符串
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //获取日
    var day = dt.getDate();
    //获取小时
    var hour = dt.getHours();
    //获取分钟
    var min = dt.getMinutes();
    //获取秒
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
    return str;
}



function my$(id){
    return document.getElementById(id);
}

//innerText和textContent兼容性
function setInnerText(element,text){
    if(typeof (element.textContent)=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
function getInnerText(element){
    if(typeof (element.textContent)=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}




//获取某个元素中的第一个子元素
function getFirstElement(element){
    if(element.firstElementChild){
        //如果浏览器支持这个属性，就返回第一个子级元素
        return element.firstElementChild;
    }else{
        //如果浏览器不支持这个firstElementChild属性，现获取传入进来的父级元素中的第一个子节点
        var node=element.firstChild;//先获取这个节点
        while(node&&node.nodeType!=1){//判断节点存在并且不是标签
            node=node.nextSibling;//继续找当前节点的下一个节点
        }
        return node;
    }
}


//获取某个元素中的最后一个子元素
function getLastElement(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while(node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}


//获取某个元素的前一个兄弟元素
function getPreviousElement(element) {
    if(element.previousElementSibling){
        return element.previousElementSibling
    }else{
        var node=element.previousSibling;
        while (node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}

//获取某个元素的后一个兄弟元素
function getNextElement(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling
    }else{
        var node=element.nextSibling;
        while (node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}

//获取某个元素的所有兄弟元素
function getSiblings(element) {
    if (!element)return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}


//返回当前浏览器是什么类型的浏览器
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        console.log("IE");
    }else if(/firefox/i.test(browserName)){
        console.log("Firefox");
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        console.log("Chrome");
    }else if(/opera/i.test(browserName)){
        console.log("Opera");
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        console.log("Safari");
    }else{
        console.log("不知道什么鬼!");
    }
}