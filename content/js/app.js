// Dom Selectors & Variables
const skyInput = document.querySelector("#skyInput");
const flowerInput = document.querySelector("#flowerInput");
const btn = document.querySelector("#continueBtn");
const scoreboard = document.querySelector("#score");
const scoreContainer = document.querySelector("#scoreContainer");
let score = 0;

// Exercise Pages
const pages = [
  {
    id: 1,
    img: "content/img/sunflower.jpg",
    credit:
      "Photo by <a href='https://unsplash.com/@mcoswalt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Maria Oswalt</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
    questionText:
      "The sky is <input maxlength='10' type='text' id='skyInput'> and the flowers are <input maxlength='10' type='text' id='flowerInput'>.",
  },
  {
    id: 2,
    img: "content/img/winter.jpg",
    credit:
      "Photo by <a href='https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Aaron Burden</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
    questionText:
      "I like cold, so my favorite season is <input maxlength='10' type='text' id='seasonInput'> , and my least favorite month is the 8th, which is <input maxlength='10' type='text' id='monthInput'>.",
  },
  {
    id: 3,
    img: "content/img/numbers.jpg",
    credit:
      "Photo by <a href='https://unsplash.com/@nhillier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Nick Hillier</a> on <a href='https://unsplash.com/s/photos/numbers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
    questionText:
      "five &plus; two = <input maxlength='10' type='text' id='sevenInput'><br>three &times; three = <input maxlength='10' type='text' id='nineInput'><br>nine &minus; eight = <input maxlength='10' type='text' id='oneInput'> ",
  },
];

// Audios
// Colors
var red = new Audio();
red.src = "content/audio/colors/red.mp3";
var orange = new Audio();
orange.src = "content/audio/colors/orange.mp3";
var yellow = new Audio();
yellow.src = "content/audio/colors/yellow.mp3";
var green = new Audio();
green.src = "content/audio/colors/green.mp3";
var blue = new Audio();
blue.src = "content/audio/colors/blue.mp3";
var indigo = new Audio();
indigo.src = "content/audio/colors/indigo.mp3";
var violet = new Audio();
violet.src = "content/audio/colors/violet.mp3";

//Seasons
var winter = new Audio();
winter.src = "content/audio/seasons/pronunciation_en_winter.mp3";
var spring = new Audio();
spring.src = "content/audio/seasons/pronunciation_en_spring.mp3";
var summer = new Audio();
summer.src = "content/audio/seasons/pronunciation_en_summer.mp3";
var autumn = new Audio();
autumn.src = "content/audio/seasons/pronunciation_en_autumn.mp3";

//Months
var january = new Audio();
january.src = "content/audio/months/pronunciation_en_january.mp3";
var february = new Audio();
february.src = "content/audio/months/pronunciation_en_february.mp3";
var march = new Audio();
march.src = "content/audio/months/pronunciation_en_march.mp3";
var april = new Audio();
april.src = "content/audio/months/pronunciation_en_april.mp3";
var may = new Audio();
may.src = "content/audio/months/pronunciation_en_may.mp3";
var june = new Audio();
june.src = "content/audio/months/pronunciation_en_june.mp3";
var july = new Audio();
july.src = "content/audio/months/pronunciation_en_july.mp3";
var august = new Audio();
august.src = "content/audio/months/pronunciation_en_august.mp3";
var september = new Audio();
september.src = "content/audio/months/pronunciation_en_september.mp3";
var october = new Audio();
october.src = "content/audio/months/pronunciation_en_october.mp3";
var november = new Audio();
november.src = "content/audio/months/pronunciation_en_november.mp3";
var december = new Audio();
december.src = "content/audio/months/pronunciation_en_december.mp3";

//Numbers
var one = new Audio();
one.src = "content/audio/numbers/pronunciation_en_one.mp3";
var two = new Audio();
two.src = "content/audio/numbers/pronunciation_en_two.mp3";
var three = new Audio();
three.src = "content/audio/numbers/pronunciation_en_three.mp3";
var four = new Audio();
four.src = "content/audio/numbers/pronunciation_en_four.mp3";
var five = new Audio();
five.src = "content/audio/numbers/pronunciation_en_five.mp3";
var six = new Audio();
six.src = "content/audio/numbers/pronunciation_en_six.mp3";
var seven = new Audio();
seven.src = "content/audio/numbers/pronunciation_en_seven.mp3";
var eight = new Audio();
eight.src = "content/audio/numbers/pronunciation_en_eight.mp3";
var nine = new Audio();
nine.src = "content/audio/numbers/pronunciation_en_nine.mp3";
var zero = new Audio();
zero.src = "content/audio/numbers/pronunciation_en_zero.mp3";

// Event Listeners
skyInput.addEventListener("input", function () {
  if (this.value === "blue") {
    this.style.backgroundColor = "#76c24d";
    this.disabled = "disabled";
    blue.play();
    addScore(1);
  }
});

flowerInput.addEventListener("input", function () {
  if (this.value === "yellow") {
    this.style.backgroundColor = "#76c24d";
    this.disabled = "disabled";
    yellow.play();
    addScore(1);
  }
});

function addScore(num) {
  score = score + num;
  scoreboard.innerHTML = score;
  if (score === 2) {
    btn.innerHTML = "Continue: Seasons & Months";
    btn.style.transform = "translateY(0)";
    btn.addEventListener("click", function () {
      changePage(2);
      btn.style.transform = "translateY(300px)";
    });
  } else if (score === 4) {
    btn.innerHTML = "Continue: Numbers";
    btn.style.transform = "translateY(0)";
    btn.addEventListener("click", function () {
      changePage(3);
      btn.style.transform = "translateY(300px)";
    });
  } else if (score === 7) {
    btn.innerHTML = "Congratulations!";
    btn.disabled = "disabled";
    btn.style.cursor = "default";
    btn.style.transform = "translateY(0)";
    btn.addEventListener("click", function () {});
  }
}

function changePage(num) {
  if (num === 2) {
    const newPage = pages.find((page) => page.id === num);
    document.querySelector("#imgSrc").src = newPage.img;
    document.querySelector("#credit").innerHTML = newPage.credit;
    document.querySelector("#questionText").innerHTML = newPage.questionText;

    var seasonInput = document.querySelector("#seasonInput");
    seasonInput.addEventListener("input", function () {
      if (this.value === "winter") {
        this.style.backgroundColor = "#76c24d";
        this.disabled = "disabled";
        winter.play();
        addScore(1);
      }
    });

    var monthInput = document.querySelector("#monthInput");
    monthInput.addEventListener("input", function () {
      if (this.value === "august") {
        this.style.backgroundColor = "#76c24d";
        this.disabled = "disabled";
        august.play();
        addScore(1);
      }
    });
  } else if (num === 3) {
    const newPage = pages.find((page) => page.id === num);
    document.querySelector("#imgSrc").src = newPage.img;
    document.querySelector("#credit").innerHTML = newPage.credit;
    document.querySelector("#questionText").innerHTML = newPage.questionText;

    var sevenInput = document.querySelector("#sevenInput");
    sevenInput.addEventListener("input", function () {
      if (this.value === "seven") {
        this.style.backgroundColor = "#76c24d";
        this.disabled = "disabled";
        seven.play();
        addScore(1);
      }
    });

    var nineInput = document.querySelector("#nineInput");
    nineInput.addEventListener("input", function () {
      if (this.value === "nine") {
        this.style.backgroundColor = "#76c24d";
        this.disabled = "disabled";
        nine.play();
        addScore(1);
      }
    });

    var oneInput = document.querySelector("#oneInput");
    oneInput.addEventListener("input", function () {
      if (this.value === "one") {
        this.style.backgroundColor = "#76c24d";
        this.disabled = "disabled";
        one.play();
        addScore(1);
      }
    });
  }
}
