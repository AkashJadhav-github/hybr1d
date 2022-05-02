# Hybr1d 
This project is a standard template for a nodejs application. It has below things included in it - 

1) Routes, Controllers, Services, Models, Middlewares
2) ENV file, Authentication, DB connection, Nodemon

Steps to run this project - 

1) npm i (install all the required dependency when poped up during execution of the next command)
2) npm start

CURLs for the API listed below -
1) Signup
curl --location --request POST 'localhost:3000/users/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "Akash",
    "password": "123",
    "type": 1
}'

2) Login
curl --location --request POST 'localhost:3000/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "Akash",
    "password": "123"
}'

3) List of all sellers (Please update your latest auth token in the command below)
curl --location --request GET 'localhost:3000/api/buyer/list-of-sellers' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjZmZTQwMzZkYjJmYzdkMjMyMDk0MWUiLCJpYXQiOjE2NTE1MDAwMzUsImV4cCI6MTY1MTU4NjQzNX0.M57ffK5jzLOgAkVmGeLo6MATOH0uaYQ5M6pLMNPZLvQ'

4) Insert catalog for a particular seller (change the seller id in below command)
curl --location --request POST 'localhost:3000/api/seller/create-catalog' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"ABC cataglog",
    "sellerId": "627017f2720b23989fc318b9",
    "products": [
        {"name": "B", "price": 10},
        {"name": "B", "price": 10}
    ]
}'

5) Get seller catalog
curl --location --request GET 'localhost:3000/api/buyer/seller-catalog/626fe4036db2fc7d2320941e'

6) Create Order of products
curl --location --request POST 'localhost:3000/api/buyer/create-order/626fe4036db2fc7d2320941e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "buyerId": "626fe4036db2fc7d2320941e", "sellerId": "626fe4036db2fc7d2320941e", "productsId": ["626ff5811958d5b87d18ce26"]
}'

7) Get product orders
curl --location --request GET 'localhost:3000/api/seller/orders?seller_id=626fe4036db2fc7d2320941e'
