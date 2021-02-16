# Contributing <!-- omit in TOC -->

We are happy to see your interest in conteributing to the project. 

## Contents <!-- omit in TOC -->
- [Issues](#issues)
  - [Labels](#labels)
- [Branches](#branches)
  - [Temporary branches](#temporary-branches)
    - [Feature branches](#feature-branches)
    - [Bug fix branches](#bug-fix-branches)
    - [Hot fix branches](#hot-fix-branches)
    - [Documentation](#documentation)
    - [Experimental](#experimental)
    - [Work in progress](#work-in-progress)
  - [Stable branches](#stable-branches)
    - [Develop](#develop)
    - [Main](#main)
    - [Release](#release)
- [Pull Requests](#pull-requests)
  - [Areas](#areas)
## Issues

All development is tracked through GitHub issues in the repository. 

If this is your first contribution, we encourage you to choose an issue with the `good first issue` label.

If you want to work on something that is not yet reflected in an issue, please create one first to discuss the idea with the community. Add as many of the labels below as you see fit.

### Labels
- bug
- dependencies
- documentation
- duplicate
- enhancement
- good first issue
- help wanted
- invalid
- question
- wontfix
## Branches

To easily identify branches, we encourage you to use the following branch naming convention. Start with the category (outlined below), followed by the issue number (if available), and finally a descriptive name for the branch.

`category/issue_number/branch_name`

These are the categories.
### Temporary branches
#### Feature branches

Used for new features, that do not exist yet.

`feature/123/user-login`

#### Bug fix branches

Used for bugs that will be fixed in an upcoming release.

`bugfix/1342/picture-not-displayed`

#### Hot fix branches

Used for bugs that need to be fixed immediately and cannot wait until next release.

`hotfix/1523/login-issue`

#### Documentation
Used for branches concerning solely the documentation of the project. Ideally documentation changes are carried out together with the implementation of what is documented, but in case that is not possible, use the docs category.

`docs/add-contributing-guidelines`

#### Experimental

Branches with experimental features, that will most likely not be merged. Once a feature in and experimental branch has been validated, it can be moved to a feature branch.

`exp/implement-flux-capacitor`

#### Work in progress

Branches containing longer term work in progress, that has been started on but will not be finished anytime soon.

`wip/add-camera-tests`

### Stable branches
#### Develop
#### Main
#### Release

## Pull Requests
After you have developed your contribution, it is time to create a pull request. Pull requests follow a similar naming scheme to branches, only with different formatting and the omission of the issue number (the pull request will be linked to the issue directly). In addition to the category, please include the area you worked on in the pull request title as well. The areas are separated into the different screens and components used. When working on a whole screen, the screen name as outlined below suffices, when your work is concentrated on a specific part of this screen, please use the part names as outlined below.

Example pull request titles: 
- `[Feature] Controversies: Random Spotlight`
- `[Bug] Scan: Merkel scanned as Amthor`
### Areas
- Profile
  - Controversies
  - Biography
  - SideJobs
- Votes
  - Overview
  - Details
- Discover
  - Scan
  - Search
- ElectionChances
  - FirstVote
  - SecondVote