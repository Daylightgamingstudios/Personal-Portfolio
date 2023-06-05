function animateText() {//declare a function
    const text = "Sid a fullstack dev.";//set the text to my name
    const container = document.getElementById("animated-text");//declare a variable be using the getelement by id element

    let index = 0;//set index to zero
    const interval = setInterval(() => {
      container.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          container.textContent = "";
          animateText();
        }, 3000);
      }
    }, 100);
  }

  animateText();

