var quoteOutput = document.getElementById("outQoute");
var quoteAutherOutPut = document.getElementById("quoteAuther");


var quoteList = [
    {
   quote: "\“Be yourself; everyone else is already taken.\”",
   auther : "― Oscar Wilde",
},
{
    quote: "\“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\”",
    auther : "― Marilyn Monroe",
 },
 {
    quote: "\“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\”",
    auther : "― Albert Einstein",
 },
 {
     quote: "\“So many books, so little time\”",
     auther : "― Frank Zappa",
  },
  {
    quote: "\“A room without books is like a body without a soul.\”",
    auther : "― Marcus Tullius Cicero",
 }, 
{
    quote: "\“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\”",
    auther : "― Bernard M. Baruch",
 }, 
 {
    quote: `\“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.\”`,
    auther : "― William W. Purkey",
 },  {
    quote: "\“You know you're in love when you can't fall asleep because reality is finally better than your dreams.\”",
    auther : "―  Dr. Seuss",
 }, 

 {
    quote: `\“You only live once, but if you do it right, once is enough.\”`,
    auther : "― Mae West",
 },  
 {
    quote: `\“Be the change that you wish to see in the world.\”`,
    auther : "― Mahatma Gandhi",
 },  
 {
    quote: `\“In three words I can sum up everything I've learned about life: it goes on.\”`,
    auther : "― Robert Frost",
 },  
 {
    quote: `\“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.\”`,
    auther : "― J.K. Rowling, Harry Potter and the Goblet of Fire",
 },  
 {
    quote: `\“Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend\”`,
    auther : "― Albert Camus",
 },  
 {
    quote: `\“If you tell the truth, you don't have to remember anything.\”`,
    auther : "―  Mark Twain",
 },  
 ]


 
function getQuote(){
    //  if (quoteList.length == 1) {
   //      quoteOutput.innerHTML = "visit our tomorrow for more quotes" ;
   //      quoteAutherOutPut.innerHTML = "";
          
   //  }else{
   //  quoteOutput.innerHTML = quoteList[random].quote ;
   //  quoteAutherOutPut.innerHTML =quoteList[random].auther;
   //  quoteList.splice(random,1);
 
   //  }
   let random , flag ;
   random = Math.floor(Math.random() * quoteList.length); 

    if (random == flag) {
        random = Math.floor(Math.random() * quoteList.length); 

    }else{
      quoteAutherOutPut.innerHTML =quoteList[random].auther;
      quoteOutput.innerHTML = quoteList[random].quote ;

    }
    flag = random ;
    random = Math.floor(Math.random() * quoteList.length); 
 
}


 