const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.hide-v');
const bIcon = document.getElementById("burgerIcon");


// onclick event on toggle Hamburger span tag
toggleCollapse.onclick = (e) => {
  if ( encodeURIComponent(bIcon.innerHTML) === "%E2%A8%89" ) { 
    bIcon.innerHTML = "&equiv;";
  } else {
    bIcon.innerHTML = "&#x2A09;";
  }
  nav.classList.toggle("show-v");
}

