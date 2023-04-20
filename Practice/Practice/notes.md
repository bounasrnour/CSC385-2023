## Notes

don't forget to type npm install in order to download the dependancies, because the node_modules are in the .gitignore file and you will not have the dependancies automatically installed.

## Structure

- Normal folder contains the code without express and mongo, pure js
-  With express contains the same code but upgraded to use express and ejs
- with mongo contains the same code but upgraded to mongodb

## More notes

- find() to find all
- find({}) can take json object to filter
- create({}) to create and save 
- findOneAndDelete() to delete one isntance
- also don't forget to use async because it's a database call to an online db 