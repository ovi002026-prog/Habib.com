const toggle = document.getElementById("modeToggle");

// Dark Mode Save
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

// Typing Effect
const text = "Hello, I'm Your Name";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();