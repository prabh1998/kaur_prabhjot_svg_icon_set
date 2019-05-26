(() => {
	//stub
    console.log('sweets!');
    //selet elements with Javascript

    //setting up a variable using the let keyword,
    //and using the CSS selector to find the element we want to use.

    //let store the reference to element as a variable (in memory)

    let mainHeadline = document.querySelector(".mainHeader"),
        subHead = document.querySelector("#raster-vector h3"),
        swapTextButton = document.querySelector(".switch-type"),
        allImages= document.querySelectorAll("#container"),
        objectButton = document.querySelector(".container button");
    //let store the reference to element as a variable (in memory)


     //functions are reusable pieces of code
     //that you can run any time
   function logMyId() {
    	console.log(this.id);
    	// toggle a class here with classList

    }
     function logTheSVG() {
       console.log(this.previousElementSibling.id);
     }
    function swapText() {
      mainHeader.textContent = "YUM YUM!";
      mainHeader.classList.toggle("selected");
      subHead.textContent = "You're also something else!";
      subHead.classList.toggle("selected");
    }

    //event always go down here


    swapTextButton.addEventListener("click", swapText);
   // select and loop through a bunch of items at once -> one to many relationship
    allImages.forEach(item => {
      item.addEventListener("click", logMyId)
    });
    // the button beside the svg object objectButton
    objectButton.addEventListener("click", logMyId);
})();