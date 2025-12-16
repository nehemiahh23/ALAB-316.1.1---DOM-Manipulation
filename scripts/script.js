// Menu data structure

var menuLinks = [
	{ text: 'about', href: '/about' },
	{ text: 'catalog', href: '/catalog' },
	{ text: 'orders', href: '/orders' },
	{ text: 'account', href: '/account' },
];

// Part 1: Getting Started
// Select and cache the <main> element in a variable named mainEl
const mainEl = document.getElementsByTagName("main")[0]
const h1 = document.createElement("h1")

// Set the background color of mainEl
mainEl.style.backgroundColor = "var(--main-bg)"

// Set the content of mainEl
h1.textContent = "DOM Manipulation"
mainEl.appendChild(h1)

// Add a class
mainEl.classList.add("flex-ctr")

// Part 2: Creating a Menu Bar
// Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById("top-menu")

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%"

// Set the background color of topMenuEl
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Add a class
topMenuEl.classList.add("flex-around")

// Part 3: Adding Menu Buttons

// Iterate over the entire menuLinks array
for (let link of menuLinks) {
	// Create an <a> element
	const a = document.createElement("a")

	// On the new element, set the href
	a.setAttribute("href", link.href)

	// Set the new element's content
	a.textContent = link.text

	// Append the new element to topMenuEl
	topMenuEl.appendChild(a)
}