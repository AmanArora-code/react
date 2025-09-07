# DevFood 🍔

DevFood is a simple React app built while learning **props**, **component composition**, and **dynamic rendering** using hardcoded restaurant data.  

---

## 📌 What I Learned
- **Props**  
  - Passing props from parent to child components.  
  - Receiving props in child components (`RestuarantCard`).  
  - Using destructuring for cleaner code (`const { restuarant } = props`).  

- **Reusable Components**  
  - Created a `RestuarantCard` component that displays restaurant details dynamically.  
  - Reused it multiple times with different data.  

- **Hardcoded Data + Dynamic Rendering**  
  - Used an array of restaurant objects (`resdata`) to simulate backend data.  
  - Rendered multiple restaurant cards using `.map()` with a unique `key` prop.  

- **Component Composition**  
  - `App` → renders `Header` and `Body`.  
  - `Body` → maps over `resdata` and renders multiple `RestuarantCard`s.  

---

## 🛠 Code Highlights
- **App.js** → Root component rendering `Header` and `Body`.
- **Body.js** → Handles search bar UI and loops over restaurant data with `.map()`.  
- **RestuarantCard.js** → Displays restaurant details dynamically using props.  

---

