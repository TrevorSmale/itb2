## Building Our Second Procedural Texture with a Mapped Texture

We’ll combine a procedural texture (e.g., for a label background) and a mapped image texture (the label design).

![Label Texture Nodes](img/LabelTextureNodes.png "Label Texture Nodes")

## [📁 Download Label Image](dl/WineBottle/Label.png)  

---

1. **Adding the Image Texture**  
   - **Shortcut Method:**  
     - <kbd>Shift+A</kbd> → `Texture > Image Texture`, then <kbd>Open</kbd> to locate your `.png` label.  
   - **GUI Method:**  
     - `Add > Texture > Image Texture`, then click `Open` to browse.

2. **UV Mapping**  
   - **Shortcut Method:**  
     - In `Edit Mode`, press <kbd>U</kbd> → `Unwrap` (or select a projection method).  
   - **GUI Method:**  
     - `Mesh > UV Unwrap > Unwrap` (in `Edit Mode`).

3. **Combining with Procedural Nodes**  
   - **Shortcut Method:**  
     - <kbd>Shift+A</kbd> to add Mix, ColorRamp, or other blending nodes. Connect the image texture with procedural nodes into the `Principled BSDF`.  
   - **GUI Method:**  
     - `Add > Color > MixRGB` (or similar). Then connect the outputs accordingly.
     

 
