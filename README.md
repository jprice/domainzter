![](https://github.com/ThomasBS/domainzter/blob/master/public/assets/img/domainzter-logo-md.png?raw=true)
# Domainzter
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/designed-in-ms-paint.svg)](http://forthebadge.com)

## About
Domainzter is a simple web app to keep track of domains. It uses [Guzzle](http://guzzle.readthedocs.org/en/latest/index.html) in a combination with JS to fetch information about the domain, 
getting stuff like status, server info and external tools/frameworks/cms and their version used.
Basicly it will look at server headers and scan the html body for known keywords.

Domainzter is built with [Lumen](http://lumen.laravel.com/) <3.

![](http://domainzter.com/assets/img/rsz_1domainzter-ss.png)

![](http://domainzter.com/assets/img/rsz_domainzter-ss3.png)

### Demo
A preview of the app will soon be available at [domainzter.com](http://domainzter.com).

## Installation
A few things is required in order to get domainzter to work. You need to have [composer](https://getcomposer.org/), [npm](https://www.npmjs.com/) and [bower](http://bower.io/) installed.
It is (obviously) also expected to have some form of webserver and database set up. I'm using nginx and mysql myself.

To get the app up and running, follow these steps:
- Clone Domainzter repository
```
$ git clone https://github.com/ThomasBS/domainzter.git
```

- Install composer dependencies defined in ``composer.json``
```
$ composer install
```

- Install npm dependencies and gulp
```
$ npm install
$ npm install -g gulp
```

- Install bower dependencies
```
$ bower install
```

- Gulp will do some concatination etc for frontend stuff (js, less, fontawesome)
```
$ gulp
$ gulp watch
```

- Environment configurations need to be set

There's a ``.env.example`` file included in the repo. Rename this file to ``.env`` and edit to fit your settings.

- [Database Migrations](http://laravel.com/docs/5.1/migrations)
```
$ php artisan migrate
```

- Great Success!

Domainzter should now be ready to please your needs.

## Todos
- [ ] Translations / Support for more languages
- [ ] Support foreign characters in URLs (ex. Æ, Ø, Å)
- [ ] Bulk-add domains
- [ ] Redesign icons for apps
- [ ] Notifications
    - [ ] When domain is about to expire
    - [ ] When updates are available for tools used on domain
- [ ] Settings page
    - [ ] Language selection
    - [ ] Layout choices
    - [ ] Auto-update option (ex. Fetch domain info every hour)
- [ ] Guzzle 6.0 upgrade
- [ ] Tooltips various places
- [ ] Tests (?)

## Contributing
I'd love some help improving Domainzter. Reporting issues and creating pull requests would be much appreciated.

### License
MIT
