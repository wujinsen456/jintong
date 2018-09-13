window.onload=function () {

    let navLi=document.querySelectorAll("nav li");
    // let all3=document.querySelector(".all3");
    // let all1=document.querySelector(".all1");
    let allLi=document.querySelectorAll(".all ul");
    let headerLi=document.querySelectorAll("header ul");
    console.log(navLi,allLi,headerLi);

    navLi.forEach(function(v,i){
        v.onclick=function () {
            navLi.forEach(function (v,i) {
                v.style.background="";
                v.style.color="";
                v.style.boxShadow="none";
                allLi[i].style.display="none";
                headerLi[i].style.display="none";
            });
            v.style.background="#3bacfe";
            v.style.color="#fff";
            v.style.boxShadow="0 0.05rem 0.1rem 0.02rem rgb(184,225,255)";
            allLi[i].style.display="block";
            headerLi[i].style.display="block";
        }
    });

    let cri_bac1=document.querySelector(".cri_bac1 img");
    console.log(cri_bac1);
    cri_bac1.onclick=function () {
        location.assign("index_wu2.html","");
    };

    let threePot=document.querySelector(".icon-three-point-right");

    threePot.onclick=function () {
        location.assign("index_wu2.html","");
    };

    let sec_detailLi=document.querySelectorAll(".sec_detail");
    console.log(sec_detailLi);
    sec_detailLi.forEach(function (v) {
        v.onclick=function () {
            location.assign("index_wu3.html","");
        }
    });

    let tag_right=document.querySelectorAll(".tag_right");
    console.log(tag_right);
    tag_right.forEach(function (v) {
       v.onclick=function () {
           location.assign("index_wu6.html","");
        }
    });


    let ul1Li=document.querySelectorAll(".ul1 li");
    ul1Li.forEach(function (v) {
        v.onclick=function () {
            location.assign("index_wu7.html","");
        }
    })

};