const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
burger.addEventListener('click', () => {
	menu.classList.toggle('active')
})
const close = document.getElementById('close')
close.addEventListener('click', () => {
	menu.classList.toggle('active')
})
const links = menu.querySelectorAll('a')
links.forEach((element) => {
	element.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
});

function headerFixed() {
	const nav = document.querySelector('.header')
	const breakpoint = 20
	
	if(window.scrollY >= breakpoint) {
		nav.classList.add('header-fixed')
	} else {
		nav.classList.remove('header-fixed')
	}
}

window.addEventListener('scroll', headerFixed)