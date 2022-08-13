
  
# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of contents
* [usage](#Usage)
* [contribution](#Contributing)
* [install](#Install)
* [tests](#Tests)
* [username](#Username)
* [email](#Email)
* [license](#License)

## Usage

This app is an API for a social network application. The API is not deployed, it is only the backend of the application. In the app, users can be created, they can post thoughts, and other users can react to those thoughts. There are also delete functions for the users, thoughts, and reactions.

The application can be run/tested using insomnia, along with the proper routes.

Video URL of app usage:
https://drive.google.com/file/d/1qWbuarxrYgx-pQxs57iiDHaRF61BF5ZZ/view

## Contributing

The user can fork the repo for further development.

## Install and Run
```
npm i express
```

Start the server
```
npm run start
```



GET all users
```
http://localhost:3001/api/users
```

GET all thoughts
```
http://localhost:3001/api/thoughts
```

GET a single user
```
http://localhost:3001/api/users/userID
```

GET a single thought
```
http://localhost:3001/api/thoughts/thoughtID
```

To POST a new user
```
http://localhost:3001/api/users

{
	"username": "Theodore",
	"email": "Theodore@Theodore.com"
}
```

user PUT request to change username
```
http://localhost:3001/api/users/userID

{
	"username": "Teddi"
}
```

user DELETE request
```
http://localhost:3001/api/users/userID
```

To POST a new thought
```
http://localhost:3001/api/thoughts

{
  "thoughtText": "New thought posting!",
  "username": "Theodore",
  "userId": "62f8223548fdbc3e623d2359"
}
```

thought DELETE request
```
http://localhost:3001/api/thoughts/thoughtID
```

thought PUT request to change the contents of a thought
```
http://localhost:3001/api/thoughts/thoughtID

{
	"thoughtText": "Theodore thought updated!"
}
```

friend POST request to add friends to other users
```
http://localhost:3001/api/users/userID/friends/friendID
```

friend DELETE request to remove friends from other users
```
http://localhost:3001/api/users/userID/friends/friendID
```

To POST a reaction to a thought
```
http://localhost:3001/api/thoughts/thoughtID/reactions

{
  "reactionBody": "Simon reacting to a post!",
	"username": "Simon"
}
```

to DELETE a reaction to a thought
```
http://localhost:3001/api/thoughts/thoughtID/reactions/reactionID
```

## Username

tenues0

## Email

theodore.ayoub@gmail.com

## License

Information about the MIT can be found at: https://opensource.org/licenses/MIT
You are licensing this product in the year 2022.


Copyright 2022 Theodore Ayoub
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
