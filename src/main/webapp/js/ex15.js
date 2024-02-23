// 함수
//function showDetail() {
//    document.querySelector("#desc").style.display = "block";
//    document.querySelector("#open").style.display = "none";
//}
//function hideDetail() {
//    document.querySelector("#desc").style.display = "none";
//    document.querySelector("#open").style.display = "block";
//}

// id 사용
const open1= document.querySelector('#open');
open1.addEventListener("click", (e) => {
	document.querySelector("#desc").style.display = "block";
    document.querySelector("#open").style.display = "none";
})

const close1 = document.querySelector('#close');
close1.addEventListener("click", (e) => {
	document.querySelector("#desc").style.display = "none";
    document.querySelector("#open").style.display = "block";
})

const plus= document.querySelector('#btnplus');
plus.addEventListener("click", (e) => {
//	let k = document.querySelector("#res").innerHTML++; // 한번에 쓰는 식
	let k = document.querySelector("#res").innerHTML; // 변수에 저장해서 쓰는 식
	k++;
	document.querySelector("#res").innerHTML = k;
})

const Minus = document.querySelector('#btnMinus');
Minus.addEventListener("click", (e) => {
//	let k = document.querySelector("#res").innerHTML--;
	let k = document.querySelector("#res").innerHTML;
	k--;
	document.querySelector("#res").innerHTML = k;
})