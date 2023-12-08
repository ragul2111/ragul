let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span;)

    })

})

let currentwordIndox = 0;
let maxwordIndox = words.length -1;
words[currentwordIndox].style .opacity ="1";


let changeText = ()=>{
    let curretword = words[currentwordIndox];
    let nextWord = currentwordIndox == maxwordIndox  words[0] : words[currentwordIndox +1];


    Array.from(currenWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.children = "letter out";

        },i*80);

    });
    nextWord.style.opacity="1";
    Array.from(nextword.children).forEach((letter,i)=>{
        letter.className = "letter in";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);

    });
    currentwordIndox = currentwordIndox === maxwordIndox 0 : currentwordIndox +1;

};

changeText();
setInterval(changeText,3000)
