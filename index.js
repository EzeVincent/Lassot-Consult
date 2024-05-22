/*MENU OPEN AND CLOSE*/ 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

  


/*WORD CHANGE*/
window.onload = function() {
    var changingWord = document.getElementById("changingWord");
    var words = ["Tax", "Accounting", "Auditing"]; // Add your words here
    var index = 0;

    function changeWord() {
        changingWord.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 5000); // Change word every 2 seconds
};

  /*LOADER*/

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("disapear");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
  })


  /* CONTACT FORM POPUP*/
function openForm(){
    const popup = document.querySelector('popupForm');
    popupForm.style.display = 'flex';
  }
  function closeForm(){
    const popup = document.querySelector('popupForm');
    popupForm.style.display = 'none';
  }

  
   /*MOUSE MOVE TRAIL*/
const squareTrail = document.querySelector('.square-trail');
const squareTemplate = document.createElement('div');
squareTemplate.className = 'square';

document.addEventListener('mousemove', (event) => {
  const square = squareTemplate.cloneNode();
  square.style.top = `${event.clientY}px`;
  square.style.left = `${event.clientX}px`;
  square.style.background = getRandomColor();
  squareTrail.appendChild(square);
  body.appendChild(square);
});

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(36)}`;
}




/*ACCORDION FOR LISTING*/
function opena(){
  const opena = document.querySelector('accordionTxt');
  accordionTxt.style.display = 'block';
  obtn.style.display = 'none';
  cbtn.style.display = 'block';

}
function closea(){
  const closea = document.querySelector('accordionTxt');
  accordionTxt.style.display = 'none';
  obtn.style.display = 'block';
  cbtn.style.display = 'none';
};

function opena1(){
  const opena1 = document.querySelector('accordionTxt1');
  accordionTxt1.style.display = 'block';
  obtn1.style.display = 'none';
  cbtn1.style.display = 'block';

}
function closea1(){
  const closea1 = document.querySelector('accordionTxt1');
  accordionTxt1.style.display = 'none';
  obtn1.style.display = 'block';
  cbtn1.style.display = 'none';
};

function opena2(){
  const opena2 = document.querySelector('accordionTxt2');
  accordionTxt2.style.display = 'block';
  obtn2.style.display = 'none';
  cbtn2.style.display = 'block';

}
function closea2(){
  const closea2 = document.querySelector('accordionTxt2');
  accordionTxt2.style.display = 'none';
  obtn2.style.display = 'block';
  cbtn2.style.display = 'none';
};

function opena3(){
  const opena3 = document.querySelector('accordionTxt3');
  accordionTxt3.style.display = 'block';
  obtn3.style.display = 'none';
  cbtn3.style.display = 'block';

}
function closea3(){
  const closea3 = document.querySelector('accordionTxt3');
  accordionTxt3.style.display = 'none';
  obtn3.style.display = 'block';
  cbtn3.style.display = 'none';
};

function opena4(){
  const opena4 = document.querySelector('accordionTxt4');
  accordionTxt4.style.display = 'block';
  obtn4.style.display = 'none';
  cbtn4.style.display = 'block';

}
function closea4(){
  const closea4 = document.querySelector('accordionTxt4');
  accordionTxt4.style.display = 'none';
  obtn4.style.display = 'block';
  cbtn4.style.display = 'none';
};







/*SCROLL BOX ANIMATION*/
/*
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll' ,checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('show');
      }
      else {
        box.classList.remove('show');
      }
    
  })
}
*/

/*SWIPER */
/*
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

*/
