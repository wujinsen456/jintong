window.onload=function () {
    let hide2=document.querySelector(".hide2");
    let hide3=document.querySelector(".hide3");
    let hide4=document.querySelector(".hide4");
    let radio=document.querySelectorAll(".radio img");
    let sub=document.querySelector(".sub");
    let hide=document.querySelector(".hide");
    console.log(hide2,hide3,hide4,radio);

    hide2.onclick=function () {
        radio[0].style.display="block";
        radio[1].style.display="none";
        radio[2].style.display="none";
    };
    hide3.onclick=function () {
        radio[1].style.display="block";
        radio[2].style.display="none";
        radio[0].style.display="none";
    };
    hide4.onclick=function () {
        radio[2].style.display="block";
        radio[1].style.display="none";
        radio[0].style.display="none";
    };
    sub.onclick=function () {
        hide.style.display="none";
    }
    let line1_ri3=document.querySelector(".line1_ri3");
    console.log(line1_ri3);
    line1_ri3.onclick=function(){
        hide.style.display="block";
    }

}
