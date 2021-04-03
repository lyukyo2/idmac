/*
document.querySelector(".wp-bottom-menu-search-form-trigger").addEventListener("click", function() {
    document.querySelector(".wp-bottom-menu-search-form-wrapper").classList.toggle("sf-active");
    document.querySelector(".wp-bottom-menu").classList.toggle("sf-active");
});

*/

/*

const wpbmsft = document.querySelector(".wp-bottom-menu-search-form-trigger");
const wbmsfw = document.querySelector(".wp-bottom-menu-search-form-wrapper");
const wpbmt = document.querySelector(".wp-bottom-menu");

wpbmsft.addEventListener("click", function() {
    wbmsfw.classList.toggle("sf-active");
    wpbmt.classList.toggle("sf-active");
});*/

function wpbmsft(){
	document.querySelector(".wp-bottom-menu-search-form-wrapper").classList.toggle("sf-active");
    document.querySelector(".wp-bottom-menu").classList.toggle("sf-active");
}