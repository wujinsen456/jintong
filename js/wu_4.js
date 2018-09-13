/**
 * Created by 三木 on 2018/8/28.
 */
window.onload=function () {
    let navLi=document.querySelectorAll("nav li");
    let commitallLi=document.querySelectorAll(".commitall");
    console.log(navLi,commitallLi);
    navLi.forEach(function (v,i) {
        v.onclick=function () {
            navLi.forEach(function (v,i) {
                navLi[i].style.borderBottom="";
                navLi[i].style.color="";
                commitallLi[i].style.display="none";
            });
            navLi[i].style.borderBottom="0.07rem solid #3bacfe";
            navLi[i].style.color="#3bacfe";
            commitallLi[i].style.display="block";

        }
    })

    let Return=document.querySelector(".icon-taobaozhongchou4qizuoyoujiantou1");
    console.log(Return);
    Return.onclick=function () {
        assign("index_wu3.html","");
    }
}