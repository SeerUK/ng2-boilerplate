# The `static/` folder

This folder is transparently copied across from the `src/` directory over to the `dist/` directory.
Content from this folder is served as-is. No loaders should be used to process files in here. Any
files that can be loaded via a loader should be placed in the `public/` folder (a sibling to this 
folder).
