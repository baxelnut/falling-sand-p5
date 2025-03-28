# Falling Sand Simulator – p5.js  

This is a **Falling Sand Simulator** built with `p5.js`. It mimics real-world sand physics where particles fall, stack, and interact in a fluid-like motion. You can add different materials, change gravity, and play with the physics engine to create unique behaviors.  

---

## 🌟 Features  

✅ **Realistic Sand Simulation** – Particles fall, stack, and settle naturally.  
✅ **Mouse Interaction** – Click to add sand at different positions.  
✅ **Customizable Elements** – Modify sand properties like size, gravity, and color.  
✅ **p5.js Powered** – Runs smoothly in the browser with minimal dependencies.  

---

## 🔹 How It Works  

This simulator uses a **grid-based system** where each pixel represents a sand particle. The algorithm follows these basic rules:  

1. **Fall Down:** If the space below is empty, move down.  
2. **Spread Left/Right:** If blocked below, randomly try to move left or right.  
3. **Stacking:** If no space below or sideways, stay in place.  

---

## 🔹 Code Structure  

📚 **Project Files**  
- `sketch.js` – Main file handling setup, rendering, and logic updates.  
- `particle.js` – Defines the Sand class, movement rules, and interactions.  
- `index.html` – Base HTML file to load `p5.js` and run the simulation.  

---

## 🚀 How to Run  

### 1️⃣ Clone the Repo  

```sh
git clone https://github.com/your-username/falling-sand-simulator.git
cd falling-sand-simulator
```

### 2️⃣ Open in Browser  

Just open `index.html` in your browser. Since `p5.js` runs client-side, no extra setup is needed!  

Or if you're using vite just run:

```sh
cd falling-sand-simulator
npm run dev
```

### 3️⃣ Modify & Experiment  

Tweak `particle.js` to change the physics, color, or behavior of the sand.  


---

## ✅ Future Improvements  

- Add new materials like **water**, **fire**, or **oil**.  
- Improve performance for handling thousands of particles.  
- Implement a UI for material selection.  
- Add mobile touch support.  
