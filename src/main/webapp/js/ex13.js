const link = document.querySelector('#a');

// 요소명.addEventListener("이벤트명", (전달될 값) => {실행구문}) : 이벤트 감지기
link.addEventListener('click', (e) => {
//	alert('눌렀네');

	// preventDefault() : 해당 이벤트의 기능을 동작하지 마세요. 지금은 링크 기능을 하지 마세요
	e.preventDefault();
	console.log('눌렀네');
});

//const box = document.querySelector('#box');
//box.addEventListener("click", (e) => {
//	box.style.backgroundColor = 'pink';
//})

// 마우스가 영역에 왔을 때 속성 변경
box.addEventListener("mouseenter", (e) => {
	box.style.backgroundColor = 'pink';
})

// 마우스가 영역에 왔다가 벗어났을 때 mouseleave
box.addEventListener("mouseleave", (e) => {
	box.style.backgroundColor = 'aqua';
})
