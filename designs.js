//Let's make sure that DOM is ready.
$(document).ready(function() {

// Select color input
  const colorPicker = $("#colorPicker");
//Select the table "pixel-canvas".
  const canvas = $("#pixel_canvas");

// When size is submitted by the user (clicking the button), call makeGrid with inputHeight- and inputWidth-parametrs.
  $("#button1").click(function() {
    const inputHeight = $("#input_height").val();
    const inputWidth = $("#input_width").val();
//Call makegrid with values previously "collected".
    makeGrid(inputHeight, inputWidth);
});

//Reset-button functionality: empties the "canvas".
  $("#button2").click(function() {
    canvas.empty();
});

//Toggle Grid Size Picker, when it is not needed.
  $( "#toggle" ).click(function() {
    $("#sizePicker").toggle(function() {
  });
});

  function makeGrid(height, width) {
    // Get rid of the old.
    canvas.empty();

    // Create as many rows as the height
    for (let i = 0; i < height; i++) {
      const new_row = $("<tr></tr>");
      (canvas).append(new_row);

    // Create as many columns as there is width. Add columns to rows.
    for (let j = 0; j < width; j++) {
      const col = $("<td></td>");
      (new_row).append(col);
      }
    }
  }
  //When td-element is clicked, colorPicker values is checked and saved in color variable and the td's background-color values is set same as the color.
  $(canvas).on( 'click', 'td', function() {
      const color = colorPicker.val();
      $(this).css("background-color", color);
  });


});
