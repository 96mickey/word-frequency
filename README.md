# word-frequency

To run the application on local host, first enter both the backend and frontend and install the dependencies.

The command goes like.

```
npm i
```

Front-end makes a request to backend with a number.'

Backend makes a request to TTT server for content(i.e a txt file).

The response given by the TTT server is then converted into text and broken down into array of words in it.

This array is now converted to a form 
```
{
  "Name": "quantity",
  "Name": "quantity",
  ...
}
```
form.

Then this data is sorted in a descending order to get the maximum used words in the begining.

Then this data is converted to an array of objects which looks like
```
[
   {
   name: "Name",
   total: "quantity"
   },
   {
   name: "Name",
   total: "quantity"
   }
]
```

then the requested amount of data is sent to the front-end. This data is then displayed in front-end.

Front-end validates if there is some number in the text filed and also whether it is empty of not. It will respond accordingly.

The validations are done both on front-end and back-end. 

The file from which data is extracted, is hosted at 

[TXT file](http://terriblytinytales.com/test.txt)


