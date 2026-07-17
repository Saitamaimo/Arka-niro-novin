/*
=================================
ARKA NIROO V2
ARKA AI Assistant
=================================
*/


function openArkaAI(){


const question =
prompt(

"🤖 سلام، من ARKA AI هستم.\n\n" +
"سوال خود را وارد کنید:\n\n" +
"مثال:\n" +
"خدمات\n" +
"پروژه‌ها\n" +
"تماس\n" +
"درباره شرکت"

);



if(!question){

return;

}



const answer =
arkaAIResponse(question);



alert(answer);


}






function arkaAIResponse(text){


text =
text.toLowerCase();






// خدمات


if(

text.includes("خدمات") ||

text.includes("service") ||

text.includes("کار")

){


return `

⚡ خدمات ARKA NIROO:


• Live Line Maintenance

• Substation Engineering

• Smart Grid

• AI Power Analytics

• Digital Twin

• Renewable Energy


ما راهکارهای نوین مهندسی انرژی ارائه می‌کنیم.

`;

}








// پروژه‌ها


if(

text.includes("پروژه") ||

text.includes("project")

){


return `

🏢 پروژه‌های ARKA NIROO:


✓ شبکه انتقال برق

✓ پست‌های فشار قوی

✓ اتوماسیون صنعتی

✓ سیستم‌های مانیتورینگ انرژی

✓ تحول دیجیتال شبکه برق


`;

}








// شرکت


if(

text.includes("شرکت") ||

text.includes("درباره") ||

text.includes("about")

){


return `

⚡ ARKA NIROO


شرکت تخصصی در حوزه:


مهندسی برق قدرت

شبکه‌های هوشمند

هوش مصنوعی انرژی

Digital Twin


`;

}








// تماس


if(

text.includes("تماس") ||

text.includes("ارتباط") ||

text.includes("contact")

){


return `

📞 ارتباط با ARKA NIROO:


فرم تماس سایت را تکمیل کنید.

تیم مهندسی ما پاسخ خواهد داد.

`;

}








// سلام


if(

text.includes("سلام") ||

text.includes("hello")

){


return `

سلام 👋

به ARKA NIROO خوش آمدید.

چگونه می‌توانم کمک کنم؟

`;

}








// پاسخ عمومی


return `

سوال شما دریافت شد.


می‌توانید درباره موارد زیر سوال کنید:


⚡ خدمات

🏢 پروژه‌ها

🤖 هوش مصنوعی

📞 تماس با شرکت


`;



}
