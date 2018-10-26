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
    - Once all the containers are running without problems, open a new terminal (if you didn't use detach on the containers) and run the next command in order to install the Laravel's dependencies:

        ```
        $ docker-compose run --rm --no-deps laravel-react_server-app composer install && php artisan key:generate
        ```

* To use the app:
    * Windows users (Docker Toolbox):
        ```
        http://{DOCKER-MACHINE-IP}:8082
        ```
    * Linux users:
        - [http://localhost:8082](http://localhost:8082)

* Note:
    - If you made changes in `React` code and those are not being displayed on the browser, use `Ctrl + F5` in order to clean the cache memory and receive all the changes that you wrote in code for each time you press `F5`.
    
* Enjoy wrtiting code!!