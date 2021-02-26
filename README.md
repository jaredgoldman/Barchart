Dynamic Graphical Bar Chart Visualization Tool
Created for the Lighthouse Labs stretch project for Lighthouse Labs prep work modules. 

API functions
- User can query db for data and feed to JS function

Functions
- The drawBarChart function comprises of sub-functions that create the wrappers for each value (createBarWrapper), as well as the separate X (createXDivs) and Y (createYdivs) divs that display the values of each axis. 
- drawBarChart is fed a variable referencing the element in which to append the bars, an a nested array filled with objects with individual bar values (borObjectArray) and an object with stylistic “options” (optionsObject)
- Each these arguments are fed to almost all sub-functions 
- createBarWrapper uses a for loop to create a separate wrapper for every nested array inside the barObjectArray.
- For each BarWrapper that is created, the createMultiBars function is called .
- createMultiBars uses another for loop to create a bar for every object inside the nested array in the barObjectArray.
- For each bar that is created. the styleBar function is called which styles each bar with the key values in the optionsObject.
- setTitle creates a title in the header with customizable font.
- findMaxValue finds the highest bar value provided and rounds it up to the nearest 100. This function is used to determine the amount of divs on the y-axis.
- The generateColor function is used for backgrounds and all color values in the multi-bar example. 
- The randomBetween function is used to create random values for the multi-bar example.
- jQuery event handlers and empty method are used to clear the chart when a user clicks on one of a serious of radio buttons used to pass different objects through the drawBarChart function

A list of known issues / bugs
- Values are not exactly perfect with y-axis 

Roadmap Features
- Perfect y-axis accuracy 
- Text labels rendered on top of each bar 
- Individual value margin-width parameters 
- Automatically generated radio buttons with dynamic labels depending on how many objects are present

External Resources Used

The Odin Project 
MDN
Stack Overflow
W3 Schools 
Youtube
