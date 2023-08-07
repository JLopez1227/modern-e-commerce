# Modern-E-Commerce

## Description
In this assignment we were tasked with taking starter code and creating a functional database with models, routes, and relationships between those models. In the instructions for the homework we were given an outline of the models that we had create. All of the models were built in their respective JavaScript files along with the information they will include. After building out these models, I then had to establish the relationships between them. This was done in the `index.js` file under models. Finally, I had to write the routes for the CRUD methods we want to use with our data. These include two get routes one to find a singular item and another to find all of the items we're searching for. It also includes, a post route, a put route, and last but not least a delete route. We were also tasked with making a walkthrough video testing these different routes in Insomina, you can find the link to the tutorial video at the bottom of the README.

## Getting Started
To use this application, you'll first want to clone my GitHub Repository onto your local computer. Next you'll want to open the intergrated termial in the `db` folder and run `mysql -u root -p`. You'll enter your password and then run `source schema.sql;` this will create the database for you. After you create the database you can run the `exit` command to exit the `mysql` shell, you'll then want to run `npm i` to install all necessary packages. After running `npm i` you can then run `npm run seed` this will seed your database with the data provided in the seeds. Finally you can run `npm start` to start up the sever. Once the server has started, you can switch to Insomnia and hit the corresponding routes. If done correctly you should see data be recieved (GET method), posted (POST method), updated (PUT method), and deleted (DELETE method).


## Links 
[GitHub Repo](https://github.com/JLopez1227/Readme-Generator)

## Tutorial Video
The following video demonstrates how to properly use this application, while also showcasing it's functionality. 
[README Generator Video](https://drive.google.com/file/d/1TVxmO7FaSxvukiDSbIozjx4ycRtiVoAI/view)