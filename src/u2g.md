## Building Our Fourth Procedural Texture

We’ll design a simple backdrop material that might include a noise or gradient.

![Back Drop Texture Nodes](img/BackDropTextureNodes.png "Back Drop Texture Nodes")

1. **Noise or Gradient Setup**  
   - **Shortcut Method:**  
     - In the Shader Editor, <kbd>Shift+A</kbd> → `Texture > Noise Texture` or `Texture > Gradient Texture`.  
   - **GUI Method:**  
     - `Add > Texture > Noise Texture` (or `Gradient Texture`).

2. **Color Ramp Adjustments**  
   - **Shortcut Method:**  
     - <kbd>Shift+A</kbd> → `Converter > ColorRamp`, connect from noise output → color ramp → shader input.  
   - **GUI Method:**  
     - `Add > Converter > ColorRamp`.
