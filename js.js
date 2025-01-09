function showContent() {
	
	var info_button = document.getElementsByClassName("button")[0];
	var author_info = document.getElementById("text-button");
	
	if (info_button.innerHTML == "♥") {
		author_info.style.display = "block";
		info_button.innerHTML = "☺";
	}
	else
	{
		author_info.style.display = "none";
		info_button.innerHTML = "♥";
	}
}