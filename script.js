/*
=================================
ARKA NIROO V2
Main Website Script
=================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{



console.log(
"⚡ ARKA NIROO V2 Loaded Successfully"
);





/*
Smooth Navigation
*/


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});


});







/*
Scroll Animation
*/


const animatedItems =
document.querySelectorAll(
".card, .projects article, section"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},

{

threshold:.15

}

);




animatedItems.forEach(item=>{


item.classList.add(
"hidden"
);


observer.observe(item);


});







/*
Contact Form
*/


const form =
document.querySelector(
"form"
);



if(form){


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const name =
form.querySelector(
'input[type="text"]'
).value;



if(!name){


alert(
"لطفاً نام خود را وارد کنید"
);


return;


}




alert(

"✅ درخواست شما ثبت شد.\nتیم ARKA NIROO با شما تماس خواهد گرفت."

);



form.reset();



}

);


}







/*
AI Button
*/


const aiButton =
document.querySelector(
".ai"
);



if(aiButton){


aiButton.addEventListener(
"click",
()=>{


if(
typeof openArkaAI ===
"function"
){


openArkaAI();


}

else{


alert(
"سلام، من ARKA AI هستم."
);


}



}

);


}








/*
Dynamic Year Footer
*/


const footer =
document.querySelector(
"footer"
);



if(footer){


footer.innerHTML =
`
<p>
© ${new Date().getFullYear()}
ARKA NIROO
<br>
Intelligent Power Systems
</p>
`;



}




});
