# Quick Start - URL Shortner
### Installation
- `npm install`

### To Run Project
- `npm start`

### APIs
#### URL - Get

###### URL - POST
	 localhost:3000/users/signup
###### Request Body
	{
    	"username":"shah@gmail.com",
    	"password": "123456"
    }
#### Login

###### URL - POST
	 localhost:3000/users/login
###### Request Body
	{
    	"username":"shah@gmail.com",
    	"password": "123456"
    }
###### Response    {
        "message": "Login Success",
        "username": "shah@gmail.com",
        "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyVHlwZSI6InVzZXIiLCJfaWQiOiI1ZTA2MzU0NjI2OWE3NDM2NGZlNTViYjkiLCJ1c2VybmFtZSI6InNoYWhAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkd1NQYVF0Qi5XdFdycERKYWRhL0FMZUVUZTBQSkk4RUJYcmtKNnhRLnB2TzY3T2ZuZExKcHEiLCJfX3YiOjB9LCJpYXQiOjE1Nzc0NjUxNjMsImV4cCI6MTU3NzQ2ODc2M30.2RSkkLtCP3Hw1Vdog1SXJe04pE92Pq-hSKwebipTg8g"
    }

#### Authorized APIs
- ##### Can only be accessed by superAdmin (or any userType which we specify) + this checks for basic token validity.
	###### URL - GET
		 localhost:3000/auth/classified

- ##### Can only be accessed by an authorized user, this API does basic token validation.
	###### URL - GET
		 localhost:3000/auth/secret

- ##### No authorization included. Anyone can access this URLs.
	###### URL - GET
		 localhost:3000/auth/public
