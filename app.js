// +++++++++++++++++++++  FIRSRT PAGE ANIMATION ++++++++++++++++++++++++++

const girlIllustration=document.querySelector('#land-img');
const potLeft=document.querySelector('#pot_1');
const potRight=document.querySelector('#pot_2');
const girlsShadow=document.querySelector('.shadow');


window.addEventListener('scroll',()=>{

    let val=window.scrollY;

    girlIllustration.style.bottom=`${val}px`;
    potRight.style.bottom=`${val*0.7}px`;
    potLeft.style.bottom=`${val*0.7}px`;

    if(val<170){
        girlsShadow.style.width=`${val+160}px`;
    }

})


  



// PAGE LINKING STUFF


const card1=document.querySelector('.card-1');
const card2=document.querySelector('.card-2');
const card3=document.querySelector('.card-3');
const card4=document.querySelector('.card-4');
const card5=document.querySelector('.card-5');
const card6=document.querySelector('.card-6');
const chatBotPageTakingBtn=document.querySelector('.ai-chat');
const anonChatPageTakingBtn=document.querySelector('.anon-chat');


card1.addEventListener('click',()=>{
    window.location.href="otherHTML/food.html";
})


card2.addEventListener('click',()=>{
    window.location.href="otherHTML/exercise.html";
})


card3.addEventListener('click',()=>{
    window.location.href="otherHTML/mind-body.html";
})


card4.addEventListener('click',()=>{
    window.location.href="otherJS/carGame/games.html";
})

card5.addEventListener('click',()=>{
    window.location.href="otherHTML/self-help.html";
})

card6.addEventListener('click',()=>{
    window.location.href="otherHTML/music.html";
})


chatBotPageTakingBtn.addEventListener('click',()=>{
    window.location.href="otherHTML/chatBot.html";
})

anonChatPageTakingBtn.addEventListener('click',()=>{
    window.location.href="public/anon-chat.html";
})



// +++++++++++++++++++++++++++ ANIMATION STUFFS


const cards=document.querySelectorAll('.card');


let options ={
    root: null,
    rootMargin:'200px',
    threshold:1.0
}

let observer= new IntersectionObserver((entries,observe)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add('appear');
        }
    })
},options)


cards.forEach((card)=>{
    observer.observe(card);
})



// SMALLCARD ANIMATIONS++++++++++ 

const smallCrads=document.querySelectorAll('.more-card');


let smallCradOptions={
    root: null,
    rootMargin:'0px',
    threshold:0
}


let smallCardobserver= new IntersectionObserver((entries,observe)=>{


    let speed=300;

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.style.transitionDuration=`${speed}ms`;
            entry.target.classList.add('appear');
        }

        speed+=200;
    })

},smallCradOptions)


smallCrads.forEach((card)=>{
    smallCardobserver.observe(card);
})



window.addEventListener('scroll',()=>{
    if(window.pageYOffset==0){
        cards.forEach((card)=>{
            card.classList.remove('appear');
        })

        smallCrads.forEach((card)=>{
            card.classList.remove('appear');
        })
    }
})


// //// Page reload

const logo=document.querySelector('.logo');

logo.addEventListener('click',()=>{
    window.location.reload();
})

