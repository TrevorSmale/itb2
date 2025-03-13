## Creating The Bottle 

### 1. **Creating a Cylinder**  
   - **Shortcut Method:**  
     - <kbd>Shift+A</kbd> → `Mesh > Cylinder`.  
   - **GUI Method:**  
     - `Add > Mesh > Cylinder`.

### 2. **Deleting Cylinder Ends**  
   - **Shortcut Method:**  
     - In `Edit Mode`, press <kbd>3</kbd> (Face Select Mode), select top and bottom faces, press <kbd>X</kbd> → `Faces`.  
   - **GUI Method:**  
     - In `Edit Mode`, select faces, then go to `Mesh > Delete > Faces`.

### 3. **Resizing the Cylinder**  
   - **Shortcut Method:**  
     - Press <kbd>S</kbd> (scale), optionally constrain by <kbd>Z</kbd> or <kbd>X</kbd>/<kbd>Y</kbd>.  
   - **GUI Method:**  
     - `Object > Transform > Scale`, or in the `N` panel, adjust `Scale` numerically.

### 4. **Extruding the Cylinder**  
   - **Shortcut Method:**  
     - <kbd>E</kbd> in `Edit Mode`.  
   - **GUI Method:**  
     - `Mesh > Extrude > Extrude Region`.

### 5. **Resizing Loops**  
   - **Shortcut Method:**  
     - Select an edge loop with <kbd>Alt+Left Click</kbd>, press <kbd>S</kbd>.  
   - **GUI Method:**  
     - `Select > Select Loops > Edge Loop` then `Scale`.

### 6. **Applying the Subdivision Modifier**  
   - **Shortcut Method:**  
     - Press <kbd>Ctrl+2</kbd> to add, then <kbd>F3</kbd> → `Apply All Modifiers`.  
   - **GUI Method:**  
     - `Properties > Modifiers > Add Modifier > Subdivision Surface`, adjust levels, click `Apply`.

### 7. **Adding a Solidify Modifier**  
   - **Shortcut Method:**  
     - <kbd>F3</kbd> → `Add Solidify Modifier`.  
   - **GUI Method:**  
     - `Properties > Modifiers > Add Modifier > Solidify`.

### 8. **Applying Both Modifiers**  
   - **Shortcut Method:**  
     - <kbd>F3</kbd> → `Apply All Modifiers`.  
   - **GUI Method:**  
     - `Properties > Modifiers`, click `Apply` on each.

### 9. **Editing Mesh with Loop Tools**  
   - **Shortcut Method:**  
     - In `Edit Mode`, select a loop or multiple edges, <kbd>W</kbd> → `LoopTools > Circle` (or other function).  
   - **GUI Method:**  
     - In `Edit Mode`, `Right-Click > LoopTools` (if the add-on is enabled).

### 10. **Proportionally Editing the Bottom**  
   - **Shortcut Method:**  
    - Press <kbd>O</kbd> to enable Proportional Editing, then <kbd>G</kbd> to move the bottom vertices. Mouse wheel adjusts radius.  
   - **GUI Method:**  
    - Click the Proportional Editing icon in the 3D Viewport header, then move as desired.

### 11. **Filling an Open Hole**  
   - **Shortcut Method:**  
    - In `Edit Mode`, select the open edge loop, press <kbd>F</kbd> to fill.  
   - **GUI Method:**  
    - `Mesh > Face > Make Edge/Face`.

### 12. **Adding and Adjusting Loop-Cuts**  
   - **Shortcut Method:**  
    - <kbd>Ctrl+R</kbd> to initiate a loop cut, then move/scroll to place it.  
   - **GUI Method:**  
    - `Mesh > Insert > Edge Loop`.

### 13. **Applying a Displacement Modifier**  
   - **Shortcut Method:**  
    - Press <kbd>F3</kbd> → `Add Displace Modifier`.  
   - **GUI Method:**  
    - `Properties > Modifiers > Add Modifier > Displace`. Adjust texture and strength.

### 14. **Using a Texture with the Modifier**  
   - **Shortcut Method:**  
    - From the Displace Modifier panel, press <kbd>New</kbd> next to `Texture`, then <kbd>F3</kbd> and type `Open Texture` if you have a file.  
   - **GUI Method:**  
    - `Properties > Modifiers > Displace > Texture > New`. Then in the `Texture Properties` tab, choose `Image or Movie` and load your texture.
