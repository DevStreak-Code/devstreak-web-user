# How to add a new page

1. Create a folder with Component Name , put into Features folder 
   eg: if its common then into common of features
       if its role based and not common then put into respective roles folder

2. Make Variable of that path 
   - go to src/constants/routes.js (define as common or role based)

3. Look for ROUTE_CONFIG 
   - add path , name , and component into ROUTE_CONFIG , it will automatically add into Route Manager

4. Make sure to test