const hello = document.getElementById("hello");
let count = 0;

hello.addEventListener("click", greeting);

function greeting()
{
  ++count;
  console.log("Link clicked");
  hello.innerHTML = "Clicked " + count + " times";
  hello.classList.toggle("red");
}    
