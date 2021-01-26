# Replication of web_cache_deception
- Login using username- admin and password -admin

![Login page](./images/loginpage.png)

- /private is vulnerable path.This path can only be accessed after correct authentication.

![vulnerable page](./images/vulnerableendpoint.png)


- static path added to /private gets catched by the server like /private/test.css

![cached request](./images/authorisedcachedrequest.png)


- /private/test.css can then be accessed without authentication.

![Login page](./images/unauthorisedrequest.png)

