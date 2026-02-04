// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawSandpit() → what the sand pit screen looks like
// 2) input handlers → how the player returns to the explore screen
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for sand pit screen
// ------------------------------
// drawSandpit() is called from main.js
// only when currentScreen === "sandpit"
function drawSandpit() {
  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Sand Pit", width / 2, 80);

  // ---- Sand Pit text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line descriptions
  const lines = `Hmm... while this seems like a great place to kick
back and build some sandcastles, there doesn’t
seem to be any nuts...`;

  text(lines, width / 2, 160);

  // ---- Back button ----
  // This button lets the player navigate to the final screen
  const backBtn = {
    x: width / 2, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "BACK",
  };

  // Draw the back button
  drawSandpitButton(backBtn);

  // Change cursor when hovering over the button
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for sand pit screen
// ------------------------------
// Called from main.js only when currentScreen === "sandpit"
function sandpitMousePressed() {
  // Button data must match the draw position
  const backBtn = { x: width / 2, y: 560, w: 220, h: 70 };

  // If the button is clicked, go to the final screen
  if (isHover(backBtn)) {
    currentScreen = "explore3";
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
// Button drawing helper (sand pit screen)
// ------------------------------
// This function is only responsible for drawing the button.
// It is kept separate so the visual style can be changed
// without touching input or game logic.
function drawSandpitButton({ x, y, w, h, label }) {
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
