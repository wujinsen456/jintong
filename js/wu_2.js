/**
 * Created by 三木 on 2018/8/27.
 */
window.onload=function(){
    let navLi=document.querySelectorAll("nav li");
    console.log(navLi);
    let secAll=document.querySelectorAll(".secAll");
    console.log(secAll);

    navLi.forEach(function (v,i) {
        v.onclick=function(){
            navLi.forEach(function (v){
                v.style.background="";
                v.style.color="";
                v.style.boxShadow="none";
            });
            secAll.forEach(function (value) {
                value.style.zIndex="5";
            });
            v.style.background=" #3bacfe";
            v.style.color="#fff";
            v.style.boxShadow="0 0.05rem 0.1rem 0.02rem rgb(184,225,255)";
            secAll[i].style.zIndex="10";
        }
    })

    let Return=document.querySelector(".icon-taobaozhongchou4qizuoyoujiantou1");
    Return.onclick=function () {
        location.assign("index_wu1.html","")
    };

    let sec_detailLi=document.querySelectorAll(".sec_detail");
    sec_detailLi.forEach(function (v) {
        v.onclick=function () {
            location.assign("index_wu3.html","");
        }
    })
}