<p align="center">
    <img width="30%" src="https://laravel.com/assets/img/components/logo-laravel.svg">
    <img width="15%" src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png"/>
    <img width="45%" src="https://cloud.githubusercontent.com/assets/399776/13906899/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png">
</p>

# A simple dockerized laravel-react (with reactstrap) app

* How to run it:
    - If you want all the containers run in background and run other commands use:
        
        ```
        $ docker-compose up -d
        ```
        
    - If you want all the containers being attached and see the entire log on the terminal use:
        
        ```
        $ docker-compose up
        ```
    
* How to install dependencies:
    - Once all the containers are running, if you didn't use detach on the containers run the next command in order to install the Laravel's dependencies, otherwise run it in other terminal:

        ```
        $ docker-compose run --rm --no-deps laravel-react_server-app composer install && php artisan key:generate
        ```

* How to install the database migration:
    - As this application will use authentication functionality we need to create a database that it was created in the `docker-compose.yml` file using the service called `laravel-react_db`, so in order to migrate to that database we must run, if you didn't use detach on the containers, this next command otherwise run it in other terminal:
    
        ```
        $ docker-compose run --rm --no-deps laravel-react_server-app php artisan migrate        
        ```

* To use the app:
    * Windows users (Docker Toolbox):
    
        ```
        http://{DOCKER-MACHINE-IP}:8082
        ```
        
    * Linux users:
        - [http://localhost:8082](http://localhost:8082)
        
* About the mysql container:
    - If for some reason you don't want to use the database name that we use on this template and you already ran the `docker-compose up`, you can create other database with a different name or you just want to access to the mysql's CLI and make some fun stuff, in a new terminal run this next command in order to access to the `MySQL` command line and create the one you want:
        
        ```
        $ docker exec -it laravel-react_db mysql -u laravel-user -p
        Enter password:
        ```
        
    - After run the command the mysql container will request your user password, that for this template is `laravel-user-pass`, so you finally will get access to the mysql's CLI as you can see:
        ```
        Welcome to the MySQL monitor.  Commands end with ; or \g.
        Your MySQL connection id is 3
        Server version: 5.7.24 MySQL Community Server (GPL)
        
        Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.
        
        Oracle is a registered trademark of Oracle Corporation and/or its
        affiliates. Other names may be trademarks of their respective
        owners.
        
        Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
        
        mysql>

        ```

* Note:
    - If you made changes in `React` code and those are not being displayed on the browser, use `Ctrl + F5` in order to clean the cache memory and receive all the changes that you wrote in code for each time you press `F5`.
    
* Enjoy wrtiting code!!