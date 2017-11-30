$(document).ready(function() {

// Select color input
  const colorPicker = $("#colorPicker");
//Select the table "pixel-canvas".
  const canvas = $("#pixel_canvas");

// When size is submitted by the user (clicking the button), call makeGrid with inputHeight- and inputWidth-parametrs.
  $("#button1").click(function() {
    const inputHeight = $("#input_height").val();
    const inputWidth = $("#input_width").val();
    makeGrid(inputHeight, inputWidth);
});

    function makeGrid(height, width) {
        // Get rid of the old.
        canvas.empty();

        for (let i = 0; i < height; i++) {
          // Create as many rows as the height
          const new_row = $("<tr></tr>");
          (canvas).append(new_row);

          for (let j = 0; j < width; j++) {
            // Create as many columns as there is width. Add columns to rows.
            const col = $("<td></td>");
            (new_row).append(col);
          }
        }
      }

});
 //empty canvas function and reset button.
