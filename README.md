# anet-art
Web application created with Laravel PHP. Application manages portfolio items and displays them on the website.

## Application features
### Admin panel (created by [@kchodorek](github.com/kchodorek/)
- Create, edit and delete categories of your works
- Create new work, give it category and optional name and description
- Add photos to your work
- Manage your works, edit and delete them
- Dispaly simple stats, eg. page views, count of all works, photos and categories
### Website (created by [@giemolla](http://github.com/giemolla))
- Show all works and group them by categories
- Show all photos from related work
- Send email from page to owner
- Show about and contact info

Website can be visited on this address http://80.211.196.202/

## Deployment (created by [@kchodorek](github.com/kchodorek/)
Due to complexity of a Laravel using standard shared hosting is not an option.

Application is running on VPS server (provided by Aruba Cloud) on LEMP stack.

Git is installed and configurated on VPS so deploying new version (or hotfix) is as esasy as making a push to a proper branch. 
Thanks to this application has "zero deployement downtime" feature.
