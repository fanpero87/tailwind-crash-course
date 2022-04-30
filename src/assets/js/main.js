(function () {
	const menuToggle = document.querySelector(".menu-toggle");
	const darkToggle = document.querySelector(".toogle-dark");

	menuToggle.addEventListener("click", () => {
		document.body.classList.toggle("menu-active");
	});

	darkToggle.addEventListener("click", (event) => {
		event.preventDefault();
		document.documentElement.classList.toggle("dark");
	});
})();
