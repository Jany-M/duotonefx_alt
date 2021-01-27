// Script to use the Duotone function

function randomIndex() {
	return Math.floor(Math.random() * 3);
}

function drawText(ctx) {
	// Draws text on top of the duotone image
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "bold 96px Arial";
	ctx.textBaseline = "bottom";
	ctx.fillText("Avicii", 100, 480); // draws text
	ctx.fillRect(0, 430, 80, 12); // draws the line
	ctx.textBaseline = "top";
}

function randomizeColors() {
	// Arrays of colors, with a random index chosen when clicked.
	let primary = ["#f65e35", "#00ff36", "#77acd4"];
	let secondary = ["#1e3265", "#23278a", "#033dc5"];
	let ind = randomIndex();

	// Duotone called with the appropriate arguments
	Duotone(
		"duotone",
		"https://i.imgur.com/WQ1Iydl.jpeg",
		primary[ind],
		secondary[ind],
		drawText
	);
}

function downloadImage() {
	// function to convert the canvas into a png image and set it as the src of the img tag
	document.querySelector("#image").src = document
		.querySelector("#duotone")
		.toDataURL("image/png");
}

// initial call
//randomizeColors();