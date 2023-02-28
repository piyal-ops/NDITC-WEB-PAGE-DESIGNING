



const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {
	if (document.documentElement.scrollTop <= 2000) {
		scrollBtn.style.display = "none";
	}else {
		scrollBtn.style.display = "flex";
	}
};
refreshButtonVisibility();

scrollBtn.addEventListener("click", () =>{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
	refreshButtonVisibility();
});