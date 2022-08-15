/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
 const sections = document.querySelectorAll("section");
 const nav = document.querySelector("nav");
 
 /**
  * End Global Variables
  * Start Helper Functions
  * 
  */
 
 /**
  * End Helper Functions
  * Begin Main Functions
  * 
  */
 
 // build the nav function
 sections.forEach(section => {
     const li = document.createElement("li");
     li.classList.add("menu__link", `${section.id}`);
     li.innerHTML = `<a href="#${section.id}">${section.querySelector('h2').innerHTML}</a>`;
     nav.appendChild(li);
 });
 
 // Declare navList variable
 const navList = document.querySelectorAll(".menu__link");
 
 // Set sections as active
 function setActive(section) {
     let currentSection = '';
     sections.forEach(section => {
         section.classList.remove("your-active-class");
     });
     section.classList.add("your-active-class");
     currentSection = section.id;
     navList.forEach(link => {
         if (link.classList.contains(currentSection)) {
             link.classList.add("active");
         } else {
             link.classList.remove("active");
         }
     });
 }
 
 // Scroll to section function
 function scrollToSection(event) {
     event.preventDefault();
     const target = event.target;
     const id = target.getAttribute("href");
     const section = document.querySelector(id);
     section.scrollIntoView({
         behavior: "smooth",
         block: "start"
     });
 }
 
 /**
  * End Main Functions
  * Begin Events
  * 
  */
 
 // Scroll to section on link click
 nav.addEventListener("click", event => {
     scrollToSection(event);
 });
 
 // Set sections as active on scroll
 window.addEventListener("scroll", () => {
     sections.forEach(section => {
         if (window.scrollY >= section.offsetTop - 200) { // -200 to account for header
             setActive(section);
         }
     })
 })