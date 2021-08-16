# 4WD Supacentre Progressive Web Application

This repository contains a "child" application for the 4WD Supacentre brand of Outdoor Supacentre.

Included are any customizations that are applied to 4WD Supacentre specifically (and not to the Kings AU/NZ applications), as well as the deployment information for the 4WD Supacentre application specifically

## Clone

`git clone git@bitbucket.org:expgroup/frontend-4wdsupacentre.git`

## Install

Install project dependencies

`yarn install`

### Create `.env` file

Duplicate `.env.staging`, renaming it to `.env`

### Create self-signed certificate

This will create a unique URL that will be used rather than `0.0.0.0` in the browser. It also allows assets to be requested
from the Magento server, without receiving a 500

First create a certificate directory if it doesn't already exist

`sudo mkdir -p /usr/local/share/ca-certificates`

then:

`yarn buildpack create-custom-origin ./`

Note:
You might see following error during this command 
```
Error: Command failed: sudo update-ca-certificates
sudo: update-ca-certificates: command not found
```
Try running `yarn buildpack create-custom-origin ./` again if above error is occurred. 

## Upgrading base `supacentre-pwa` application

Follow these steps to update the `supacentre-pwa` base application dependency:

1. Run `yarn upgrade-base`
2. Review the edit to `yarn.lock` - there should only be a single line change, the `resolved` property for `supacentre-pwa`
3. Compare the hash at the end of the .git url (following the #) with the commit sha of the current location of `master` in `supacentre-js-frontend`. They should match.
4. Commit the `yarn.lock` file change
5. Push to remote and create a pull request into `preproduction`
6. Once another developer has approved, it can be merged in. This will trigger a new deployment to staging

## Watch

`yarn watch`

### Branching

Create a branch from `master` in one of the following formats

`feature/M2X-**_description`, where `M2X-**` is the ticket number related to the feature, and `description` is a short description of the feature being added
 
`bug/M2X-**_description`, where `M2X-**` is the ticket number related to the bug, and `description` is a short description of the bug being fixed 

## Tests

Once feature/bug development is completed, ensure there is adequate test coverage for the new work. Also ensure that exists
tests don't fail when the new code is present

## Linting

Use `yarn prettier` to format all JS files before pushing to the remote branch

## Icons

Icons are FontAwesome. You can include them using the `react-icons` package.
Documentation [here](https://react-icons.netlify.app/).

## Pull Requests

Once feature/bug development is completed, run `yarn test` to ensure the build isn't going to fail, and once successful, push your branch to the remote repo and create a PR.

Use the following template for the pull request description:

```
Please fill in as many sections as possible  
Sections that aren't applicable can be removed, or have "N/A" added under the heading  
Please remove leading underscores before filling in. They're only there to force Bitbucket to add a new line underneath each section  
This top section should be removed before clicking the Create Pull Request button

------

**Description of the proposed changes**  
_  

**Screenshots (if applicable)**  
_  

**Other solutions considered (if any)**  
_  

**Notes to reviewers**  
_  

**Time tracking**  
Please use time code `M2X-<ID>: Code Review`, where `<ID>` is the ticket number associated with this PR
```

### Static Assets

Assets in the `/static` folder will be copied to the `/dist` folder when the application is built.

Static assets that are common between all supacentre repositorys should be put in the `supacentre-pwa` repository's static assets folder.
These will be copied to the child application's `/dist` directory when the application is built.

Any files that are brand specific should be placed in this repository's static folder.
