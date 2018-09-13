/**
 * Created by 三木 on 2018/8/29.
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
        location.assign("index_wu7.html","")
    }
    
    let navSec_allLi=document.querySelectorAll(".navSec_all li");
    let sec_allLi=document.querySelectorAll(".sec_all");
    let threeJan=document.querySelectorAll(".threeJan");
    console.log(navSec_allLi,sec_allLi,threeJan);
    navSec_allLi.forEach(function (v,i) {
        v.onclick=function () {
            navSec_allLi.forEach(function (v,i) {
                sec_allLi[i].style.display="none";
                navSec_allLi[i].style.borderBottom="";
                navSec_allLi[i].style.color="";
                threeJan[i].style.display="none";
            });
            sec_allLi[i].style.display="block";
            navSec_allLi[i].style.borderBottom="0.04rem solid #fff";
            navSec_allLi[i].style.color="#fff";
            threeJan[i].style.display="block";
        }
    })

};