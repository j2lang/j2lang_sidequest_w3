// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawDaisymeadow() → what the daisy meadow screen looks like
// 2) input handlers → how the player returns to the explore screen
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for daisy meadow screen
// ------------------------------
// drawDaisymeadow() is called from main.js
// only when currentScreen === "daisymeadow"
function drawDaisymeadow() {
  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Daisy Meadow", width / 2, 80);

  // ---- Daisy Meadow text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line descriptions
  const lines = `Uh oh... Chud is allergic to daisies! And there’s no
nuts here... let’s get outta here! Achoo!`;

  text(lines, width / 2, 160);

  // ---- Back button ----
  // This button lets the player navigate to the next explore screen
  const backBtn = {
    x: width / 2, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "BACK",
  };

  // Draw the back button
  drawDaisymeadowButton(backBtn);

  // Change cursor when hovering over the button
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for daisy meadow screen
// ------------------------------
// Called from main.js only when currentScreen === "daisymeadow"
function daisymeadowMousePressed() {
  // Button data must match the draw position
  const backBtn = { x: width / 2, y: 560, w: 220, h: 70 };

  // If the button is clicked, go to the explore2 screen
  if (isHover(backBtn)) {
    currentScreen = "explore1";
  }
}

// ------------------------------
// Keyboard input for instructions screen
// ------------------------------
// Provides keyboard-only navigation
// function instrKeyPressed() {
//   // ESC is a common “go back” key in games and apps
//   if (keyCode === ESCAPE) {
//     currentScreen = "start";
//   }

//   // B key is an additional, explicit shortcut for “back”
//   if (key === "b" || key === "B") {
//     currentScreen = "start";
//   }
// }

// ------------------------------
// Button drawing helper (daisy meadow screen)
// ------------------------------
// This function is only responsible for drawing the button.
// It is kept separate so the visual style can be changed
// without touching input or game logic.
function drawDaisymeadowButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check whether the mouse is hovering over the button
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Subtle colour change on hover for visual feedback
  fill(hover ? color(200, 200, 255, 200) : color(220, 220, 255, 170));

  // Draw the button shape
  rect(x, y, w, h, 12);

  // Draw the button text
  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
