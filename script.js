



var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
// onclick event par open tab function jo call ho rha hai usi ko define kar rhe:
function opentab(tabname){
for(tablink of tablinks)
{
tablink.classList.remove("active-link");
}

 for(tabcontent of tabcontents)
{
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")

}












var sidemenu=document.getElementById("sidemenu");

function openmenu()
    {
    sidemenu.style.right="0";
    }
    function closemenu()
    {
    sidemenu.style.right="-200px";
    }





const scriptURL = 'https://script.google.com/macros/s/AKfycbxRiO9x1A7yU7LM_deV1wwPTn7xPmAhw_bNtuWOuUV1iynfSf2ZWBBvgRiQfMr8DiHo/exec'
const form = document.forms['submit-to-google-sheet']
 
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully !"
        setTimeout(function(){
            msg.innerHTML="";

        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})