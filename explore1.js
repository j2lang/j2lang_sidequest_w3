// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawExplore1() → what the first explore screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Explore1 screen visuals
// ------------------------------------------------------------
// drawExplore1() is called from main.js only when:
// currentScreen === "explore1"
function drawExplore1() {
  // Background colour for the first explore screen
  background(180, 225, 220); // soft teal background

  // ---- Title text ----
  fill(30, 50, 60);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("Where should Chud explore first?", width / 2, 180);

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const darkcaveBtn = {
    x: width / 2,
    y: 320,
    w: 240,
    h: 80,
    label: "DARK CAVE",
  };

  const daisymeadowBtn = {
    x: width / 2,
    y: 430,
    w: 240,
    h: 80,
    label: "DAISY MEADOW",
  };

  // Draw both buttons
  drawButton(darkcaveBtn);
  drawButton(daisymeadowBtn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(darkcaveBtn) || isHover(daisymeadowBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the first explore screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "explore1"
function explore1MousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const darkcaveBtn = { x: width / 2, y: 320, w: 240, h: 80 };
  const daisymeadowBtn = { x: width / 2, y: 430, w: 240, h: 80 };

  // If DARK CAVE is clicked, go to the dark cave screen
  if (isHover(darkcaveBtn)) {
    currentScreen = "darkcave";
  }
  // If DAISY MEADOW is clicked, go to the daisy meadow screen
  else if (isHover(daisymeadowBtn)) {
    currentScreen = "daisymeadow";
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
// That logic lives in explore1MousePressed() above.
//
// Keeping drawing separate from input/logic makes code easier to read.
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  // ---- Nut counter ----
fill(0);
textSize(16);
textAlign(CENTER, BOTTOM);
text(`Nut Counter: ${nutCounter}`, width / 2, height - 20);
  
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
