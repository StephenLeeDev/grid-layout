const body = document.querySelector("body"), //Concatenate the constant body to the element body.
  postList = document.querySelector(".js-postList"), //Concatenate the postList body to the element .js-postList.
  imgHeight = 400, //Set post Height.
  imgWidth = imgHeight; //Set post Width.
let postSum = 9; //Count of Posts.

//Function to create a certain number of posts.
function makePostItem(postCount) {
  //Rotate by number of posts.
  for (let a = 1; a <= postCount; a++) {
    paintPostList(a); //Call function to create post
  }
}

//Function to create post items.
function paintPostList(postNumber) {
  const li = document.createElement("li"); //Create li element to contain the post item.
  const img = new Image(); //Create image object to output post image.
  let width;
  let height;
  li.style.cssText = `
    width: 400px;
    height: 400px;
    overflow: hidden;`; //Set li' size and overflow hidden effect.
  img.src = `images/${postNumber}.jpg`; //Put image to image object.
  //Function to crop images.
  img.onload = function() {
    width = this.width; //Get real width of image.
    height = this.height; //Get real height of image.
    //If width is bigger than height.
    if (width / height > 1) {
      img.style.cssText = `
      width: auto; 
      height: 100%;`; //Set css option to height.
      let marginLeft = (img.width - imgWidth) / 2; //Get distance to cut off.
      img.style.cssText = img.style.cssText + `margin-left: ${-marginLeft}px;`; //Cut off width.
    }
    //Else width is smaller than height.
    else {
      img.style.cssText = `
      width: 100%; 
      height: auto;`; //Set css option to width.
      let marginTop = (img.height - imgHeight) / 2; //Get distance to cut off.
      img.style.cssText = img.style.cssText + `margin-top: ${-marginTop}px;`; //Cut off height.
    }
  };
  li.appendChild(img); //Put image object to item.
  postList.appendChild(li); //Put item to list.
}

function init() {
  makePostItem(postSum); //Call function to make post list.
}

init();
