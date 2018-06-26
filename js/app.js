console.log("hello")

// you're going to need to keep track of state
// what does this mean? 

// listener for the operators
$('.oper').on('click', (e) => {
  console.log("clicked an operator")
})

//listener just for the numbers
$('.num').on('click', (e) => {
  
  // console.log(e.currentTarget, "this is e.currentTarget, note it is a vanilla JS element (no jquery)")

  // we are jquery-ifying the clicked element
  const $clickedDiv = $(e.currentTarget)

  // console.log($clickedDiv, "here's the same element, but jqueryified, we needed to this so we could use jquery methods on it")
  // console.log($clickedDiv)
  
  // get the number (which is a string) from the div
  const theNum = $clickedDiv.text()
  // console.log(theNum)

  // grab text from display
  let displayText = $('#display').text()

  // find out if there was a period
  let periodFound = false;
  if(theNum === ".") {
    const displayArray = displayText.split('')
    // look thru disp text for periods
    for(let i = 0; i < displayArray.length; i++) {
      if(displayArray[i] === ".") {
        periodFound = true;
      }
    }        
  }

  // do we need to get rid of the zero?
  // rememeber to keep it if person is entering decimals

  console.log(displayText)
  // if the display says "0" 
  if(displayText==="0") {
    console.log("display text is zero if statement")

    // if the person is not trying to type a decimal
    if(theNum !== ".") {
      console.log("not a dot. we should clear the display")
      // clear the display before numeric input
      // $('#display').text("") 
      displayText = ""
    }

  }

  // if period
  if(periodFound) {
    // do nothing
  } else  {
    // add (concatenate) theNum to it
    const newDisplayText = displayText + theNum;
    // put the new concatenated value back in the display
    $('#display').text(newDisplayText);
  }

})


$('.control').on('click', (e) => {
  console.log("you clicked control button")
  // clear the display
  $('#display').text('0');
})


