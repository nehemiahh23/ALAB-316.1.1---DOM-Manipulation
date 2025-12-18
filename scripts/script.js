// Menu data structure

var menuLinks = [
	{text: 'about', href: '/about'},  
	{text: 'catalog', href: '#', subLinks: [
  
	  {text: 'all', href: '/catalog/all'},  
	  {text: 'top selling', href: '/catalog/top'},  
	  {text: 'search', href: '/catalog/search'},  
	]},  
	{text: 'orders', href: '#' , subLinks: [
  
	  {text: 'new', href: '/orders/new'},  
	  {text: 'pending', href: '/orders/pending'},  
	  {text: 'history', href: '/orders/history'},  
	]},
	{text: 'account', href: '#', subLinks: [
	  {text: 'profile', href: '/account/profile'},
	  {text: 'sign out', href: '/account/signout'},
	]},
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

// ALAB Part Two
// Part 3: Creating the Submenu
// Select and cache the <nav id="sub-menu"> element
const subMenuEl = document.getElementById("sub-menu")

// Set the height
subMenuEl.style.height = "100%"

// Set the background color
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// Add class of to the subMenuEl element
subMenuEl.classList.add("flex-around")

// Part 4: Adding Menu Interaction
// Select and cache the all of the <a> elements inside of topMenuEl
const topMenuLinks = document.querySelectorAll("#top-menu a")

// Attach a delegated 'click' event listener
function handleClick(e) {
	e.preventDefault()
	if (e.target.tagName !== "A") return
	
	for (child of e.target.parentNode.childNodes) {
		if (child === e.target) continue
		child.classList.remove("active")
	}
	
	e.target.classList.toggle("active")
}

topMenuEl.addEventListener("click", handleClick)