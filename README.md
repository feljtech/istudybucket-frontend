# istudybucket-frontend
Frontend repository for the iStudyBucket web app
### Setup

Simply `clone` this repo on your pc, by typing out this command on your terminal.

- `git clone https://github.com/feljtech/istudybucket-frontend.git`
- `cd` into `istudybucket-frontend`
- Then run `yarn install` to install all the requisite dependencies.
- To start the server just type `yarn start` and it will start up the server.

### Contributing

1. Before working on any task, you are meant to pull the latest changes from the `main` branch, then create a separate branch to work on that particular task.

## Coding Guide

### Commits

Git commits should follow the format:

```javascript
[file/method/function changed]: Your descriptive commit message
```

For example:

`[Navbar]: add search field`

### Major Changes

All changes are made in new branches and a pull request should be opened against the dev branch for review.

### File names

File names must be all be CamelCasing. For example:

```javascript
;-UserProfile - UserProfile.js , CreatePost- CreatePost.js
```

### Creating components
All components are created in the components folder and will follow the format
`folderName\ComponentName.js` . All test and styles will be in same folder as the component.
For example:

`profilePage\ProfilePage.js`

and for styles
`profilePage\style.module.css` - This is to prevent clashes with other class names

test folder structure comming soon.


### Inside of a Component
All `js` scripts must follow the `es6` syntax (except for the default export Component which in this case will be a functional component).
For example:
`ProfilePage.js`

```
import React from 'react';

function ProfilePage(props) {
    return (
        <> Profile for <User username="iUser" /></>
    );
};

const User = ({props}) => {
    return (
        <>{props.username} </>
    )
}


export default ProfilePage;
```

### handling forms
For validation and ease to use, [Formik](https://formik.org/) is preffered together with [Yup](https://github.com/jquense/yup) for `schema validation`

### style guide
`fileName.module.css`. Bootstrap will be used to fasten devpmt. You can also use `vanillacss` if comfortable with.

:tada: Happy Coding :headphones:
