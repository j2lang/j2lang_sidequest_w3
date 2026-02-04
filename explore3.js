// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawExplore3() → what the third explore screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Explore3 screen visuals
// ------------------------------------------------------------
// drawExplore3() is called from main.js only when:
// currentScreen === "explore3"
function drawExplore3() {
  // Background colour for the third explore screen
  background(180, 225, 220); // soft teal background

  // ---- Title text ----
  fill(30, 50, 60);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("Last chance! Where should Chud explore next?", width / 2, 180);

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const sandpitBtn = {
    x: width / 2,
    y: 320,
    w: 240,
    h: 80,
    label: "SAND PIT",
  };

  const cliffBtn = {
    x: width / 2,
    y: 430,
    w: 240,
    h: 80,
    label: "CLIFF FACE",
  };

  // Draw both buttons
  drawButton(sandpitBtn);
  drawButton(cliffBtn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(sandpitBtn) || isHover(cliffBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the third explore screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "explore3"
function explore3MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const sandpitBtn = { x: width / 2, y: 320, w: 240, h: 80 };
  const cliffBtn = { x: width / 2, y: 430, w: 240, h: 80 };

  // If SAND PIT is clicked, go to the sand pit screen
  if (isHover(sandpitBtn)) {
    currentScreen = "sandpit";
  }
  // If CLIFF FACE is clicked, go to the cliff screen
  else if (isHover(cliffBtn)) {
    currentScreen = "cliff";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen EDIT: NO KEYBOARD INPUTS FOR EXPLORE SCREENS
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts the game
// - I opens instructions
// function startKeyPressed() {
//   if (keyCode === ENTER) {
//     currentScreen = "game";
//   }

//   if (key === "i" || key === "I") {
//     currentScreen = "instr";
//   }
// }

// ------------------------------------------------------------
// Helper: drawButton()
// ------------------------------------------------------------
// This function draws a button and changes its appearance on hover.
// It does NOT decide what happens when you click the button.
// That logic lives in explore3MousePressed() above.
//
// Keeping drawing separate from input/logic makes code easier to read.
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  // ---- Visual feedback (hover vs not hover) ----
  // This is a common UI idea:
  // - normal state is calmer
  // - hover state is brighter + more “active”
  //
  // We also add a shadow using drawingContext (p5 lets you access the
  // underlying canvas context for effects like shadows).
  if (hover) {
    fill(255, 200, 150, 220); // warm coral on hover

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210); // soft cream base

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // Important: reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;

  // Draw the label text on top of the button
  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
