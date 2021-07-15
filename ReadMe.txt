This a Book App with Backend in Node/Express.js with Mongo Database connection and FronEnd in React JS

To run our Book App:-

1.) Extract The Zip File 

2.) Configure cmd path till BookAppBackend 
    Execute -- npm install -- command
    after insatllition of packages 
- Execute -- npm start -- this command 
  This Will Run our Express Js Frontend on localhost:4000/

3.) Configure another cmd path till our BookAppFrontend
    Execute -- npm install -- command
    if you face some npm error try -- npm update -- command
    after insatllition of packages 
- Execute -- npm start -- this command 
  This Will Run our React Js Frontend on localhost:3000/

Now you are ready to Go..!!!

Book App Tour:-
1.) First you will interact with Login/ Sign-Up Phase 
where you can create a new account or 
if you already a existing user you can Login using those credentials,
-anyone also cannot redirect to another url without logging in also
-there are mainly 2 types of user admin and normal user
where admin can perform and has access to all CRUD operations 

2.) After logging in successfully user will be redirected to dashboard
- Here it contains Nav bar with Logo, create new book, LogOut and Search options.
- Below it we get list of book with details button of it.
- Admin user will be able to create/add new book from create new book button in nav bar.
- Pagination is also provided accordingly

3.) In Create new Book page user has to enter data in all fields where Validations are also proided

4.) In Deatils Page User can see details of that particular Book
- Admin user can also edit or delete that book accordingly his/her reqirements.

