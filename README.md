<p align="center">
    <img width="30%" src="https://laravel.com/assets/img/components/logo-laravel.svg">
    <img width="10%" src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png">
    <img width="45%" src="https://cloud.githubusercontent.com/assets/399776/13906899/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png">
</p>

# A simple dockerized laravel-react (with reactstrap) app

* How to run it:
    ```
    $ docker-compose up -d
    ```
* In order to execute watch for `React` use:
    ```
    $ docker-compose run --rm --no-deps laravel-react_node npm run watch
    ```
* To use the app:
    * Windows users (Docker Toolbox):
        ```
        http://{DOCKER-MACHINE-IP}:8082
        ```
    * Linux users:
        - [http://localhost:8082](http://localhost:8082)

* Note:
    - If you made changes in `React` code and it didn't apply on the browser, use `Ctrl + F5` in order to clean the cache memory.