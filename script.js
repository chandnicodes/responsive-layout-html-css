// checkbox checked button active
let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
let submitButton = document.getElementById("submitBtn");

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      submitButton.classList.add("active");
    } else {
      submitButton.classList.remove("active");
    }
  });
});

//second problem--Photo validator js--

/*
N= number of images 
L= length of image
W= width of image
H= height of image
*/
function photoValidate(N, L, W, H) {
  if (W < L || H < L) {
    console.log("UPLOAD ANOTHER"); //Case 1: width or height less than Length
  } else if (W > L && H > L) {
    // Case 2: width and height both greater than Length
    if (W === H) {
      console.log("ACCEPTED"); // Case 2a: Width should be equal to Height(photo already in square dimention)
    } else {
      console.log("CROP IT"); //case 2b: if width or height anything is greater than Length
    }
  }
}
// check in console all the Cases------
/*
photoValidate(1,100,50,180)
photoValidate(2,100,190,90)
photoValidate(1,100,190,190)
photoValidate(2,100,170,180)
*/
