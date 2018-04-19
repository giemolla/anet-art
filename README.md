# anet-art
Web application created with Laravel PHP. Application manages portfolio items and displays them on the website.


Website can be visited on this address http://anet-art.pl/

## Application features

### Website
- Show all works and group them by categories
- Show all photos from related work
- Send email from page to owner
- Show about and contact info


### Admin panel (created by [@kchodorek](github.com/kchodorek/))
- Create, edit and delete categories of your works
- Create new work, give it category and optional name and description
- Add photos to your work
- Manage your works, edit and delete them
- Dispaly simple stats, eg. page views, count of all works, photos and categories

## Deployment (created by [@kchodorek](github.com/kchodorek/))
Due to complexity of a Laravel using standard shared hosting is not an option.

Application is running on VPS server (provided by Aruba Cloud) on LEMP stack.

Git is installed and configurated on VPS so deploying new version (or hotfix) is as esasy as making a push to a proper branch. 
Thanks to this application has "zero deployement downtime" feature.
