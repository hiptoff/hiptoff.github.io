function PlaceTooltip(element, text, offsetX = 0, offsetY = 0)
{
	const rect = element.getBoundingClientRect();
	tooltip.style.left = (rect.right + offsetX) + "px";
	tooltip.style.top = (rect.top + rect.height / 2 + offsetY) + "px";
	
	tooltip.innerHTML = text;
}

function RegisterTooltip(element, text, offsetX = 0, offsetY = 0)
{
	element.addEventListener("mousemove", (event) =>
	{
		PlaceTooltip(element, text, offsetX, offsetY);
	});
	element.addEventListener("mouseenter", () =>
	{
		tooltip.classList.add("visible");
	});
	element.addEventListener("mouseleave", () =>
	{
		tooltip.classList.remove("visible");
	});
}

function RegisterLink(element, url)
{	
	element.addEventListener("click", (event) =>
	{
		if (event.button === 0)
		{
			window.open(url, "_self");
		}
		else if (event.button === 1)
		{
			window.open(url, "_blank");
		}
	});
	
	element.addEventListener("auxclick", (event) =>
	{
		if (event.button === 1)
		{
			event.preventDefault();
			window.open(url, "_blank");
		}
	});
	
	// Disable scroll behavior for the mouse down, so it will open the url instead
	element.addEventListener("mousedown", (e) =>
	{
		if (e.button === 1)
		{
			e.preventDefault();
		}
	});
}

function OnCopyrightClick()
{
	alert("\u00A9 2026, Hiptoff (todos los derechos reservados).\n\n\u00A1IMPORTANTE! Queda prohibida la utilizaci\u00F3n de cualquier elemento de esta web para el entrenamiento de inteligencias artificiales, LLMs o cualquier otro producto similar.");
}
