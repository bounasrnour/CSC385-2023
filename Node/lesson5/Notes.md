## Notes

in this lesson we are learning node JS and we see how difficult it is to handle every single file type with node alone <br>

## server.js
in this file we simple create a basic server that does not server or handle any url just a basic server

## server1.js
same as sever1 but here we are handling the '/' root url and the 'index.html'
then we set the status code to 200 which means success and we set the content type to indicate the file type in this case html. <br>
to server a file using only node first we need to read it
that's why we use path module in order to get the file location
then use the fs module to read it and then serve it using the http module

## server2.js
we also create a server but here we handle all the type (most of them) using a switch case, and we are also handling the parsing of the data.

## Definitions
- parsing means to transform a data from one form to another, example from text to json.
-  status codes: 200(success), 301(redirect), 404(error), 500(server error)

## More Info
this lecture may be a little hard, so if you still have some doubts or questions even after reading the notes feel free to contact me in class or by email or on whatsapp
