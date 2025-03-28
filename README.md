**Falling Sand Simulator – p5.js**

This is a Falling Sand Simulator built with p5.js. It mimics real-world sand physics where particles fall, stack, and interact in a fluid-like motion. You can add different materials, change gravity, and play with the physics engine to create unique behaviors.

**🌟 Features**

1. Particles fall, stack, and settle naturally.
2. Mouse Interaction – Click to add sand at different positions.
3. Customizable Elements – Modify sand properties like size, gravity, and color.
4. p5.js Powered – Runs smoothly in the browser with minimal dependencies.


**🔹 How It Works**

This simulator uses a grid-based system where each pixel represents a sand particle. The algorithm follows these basic rules:

1. Fall Down: If the space below is empty, move down.
2. Spread Left/Right: If blocked below, randomly try to move left or right.
3. Stacking: If no space below or sideways, stay in place.

**🔹 Code Structure**

1. sketch.js – Main file handling setup, rendering, and logic updates.
2. particle.js – Defines the Sand class, movement rules, and interactions.
3. index.html – Base HTML file to load p5.js and run the simulation.


**🚀 How to Run**

1. Clone the Repo

git clone https://github.com/your-username/falling-sand-simulator.git

cd falling-sand-simulator

2. Open in Browser

Just open index.html in your browser. Since p5.js runs client-side, no extra setup is needed!

3. Modify & Experiment

Tweak particle.js to change the physics, color, or behavior of the sand.
