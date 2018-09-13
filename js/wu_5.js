/**
 * Created by 三木 on 2018/8/28.
 */
window.onload=function () {

    let navLi=document.querySelectorAll("nav li");
    let secAllLi=document.querySelectorAll(".secAll");
    console.log(secAllLi);

    navLi.forEach(function(v,i){
        v.onclick=function () {
            navLi.forEach(function (v,i) {
                v.style.background="";
                v.style.color="";
                v.style.boxShadow="none";
                secAllLi[i].style.display="none";
            });
            v.style.background="#3bacfe";
            v.style.color="#fff";
            v.style.boxShadow="0 0.05rem 0.1rem 0.02rem rgb(184,225,255)";
            secAllLi[i].style.display="block";
        }
    })

    let navCommitLi=document.querySelectorAll(".navCommit li");
    let commitAllLi=document.querySelectorAll(".commitAll");
    console.log(navCommitLi,commitAllLi);
    navCommitLi.forEach(function (v,i) {
        v.onclick=function () {
            navCommitLi.forEach(function (v,i) {
                navCommitLi[i].style.borderBottom="";
                navCommitLi[i].style.color="";
                commitAllLi[i].style.display="none";
            });
            navCommitLi[i].style.borderBottom="0.07rem solid #3bacfe";
            navCommitLi[i].style.color="#3bacfe";
            commitAllLi[i].style.display="block";

        }
    })

    let Return=document.querySelector(".icon-taobaozhongchou4qizuoyoujiantou1");
    Return.onclick=function () {
        assign("index_wu3.html","");
    }

    let shop=document.querySelector(".shop");
    shop.onclick=function () {
        assign("index_wu12.html","");
    }

}