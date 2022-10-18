const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

function highlightWords(paragraph, colours) {
  const contentEle = document.querySelector("#content");
  // Write your code here...
  const paraEle = document.createElement("p");
  const selectEle = document.createElement("select");

  //  iterating colours array for each colour creating each option ele & append it with select element
  // for ( let i =0; i<colours.length; i++){
  //   createOptionEles.innerHTML = colours[i]
  //   createSelectEle.appendChild(createOptionEles)
  // }

  colours.forEach((colour) => {
    const optionEles = document.createElement("option");
    optionEles.innerText = colour;
    selectEle.appendChild(optionEles);
    console.log(selectEle)
    
  });

  // splitting para to turn into array
  //  iterating paragraph array to create a span for each word & append it to the p tag
  let splittedPara = paragraph.split(" ");

  splittedPara.forEach((word) => {
    const spanEles = document.createElement("span");
    spanEles.innerText = `${word} `;
    spanEles.addEventListener("click", function () {
      let valueOfSelectEles = selectEle.value;
      if (valueOfSelectEles === "yellow") {
        spanEles.style.backgroundColor = "yellow";
      } else if (valueOfSelectEles === "green") {
        spanEles.style.backgroundColor = "green";
      } else if (valueOfSelectEles === "blue") {
        spanEles.style.backgroundColor = "blue";
      } else {
        spanEles.style.backgroundColor = "white";
      }
    });

    paraEle.appendChild(spanEles);
  });
  

contentEle.appendChild(selectEle);
contentEle.appendChild(paraEle);
}



highlightWords(paragraph, colours);
