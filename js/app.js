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
  console.log($clickedDiv)
  
  // get the number (which is a string) from the div
  const theNum = $clickedDiv.text()
  console.log(theNum)

  // add number to display
  // $('#display').append(theNum)

  // grab text from display
  const displayText = $('#display').text()

  // add (concatenate) theNum to it
  const newDisplayText = displayText + theNum;

  // put the new concatenated value back in the display
  $('#display').text(newDisplayText);

})


$('.control').on('click', (e) => {
  console.log("you clicked control button")
})