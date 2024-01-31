const array = ["media/f.jpg", "media/fl1.jpg", "media/fl3.jpg", "media/fl4.jpg", "media/main.jpg"];
const imageNode = document.querySelector(".image");
const leftButtonNode = document.getElementById("left_button");
const rightButtonNode = document.getElementById("right_button");
let i = 0;

rightButtonNode.addEventListener("click", () => {
    console.log('begin', i);
    if (i === array.length - 1) {
        i = 0;
    } else {
        i++;
    }
    imageNode.src = array[i];
    console.log('end', i);
});

leftButtonNode.addEventListener("click", () => {
    console.log('begin', i);
    if (i === 0) {
        i = array.length - 1;
    } else {
        i--;
    }
    imageNode.src = array[i];
    console.log('end', i);
});