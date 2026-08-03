# Tutorials
[CSS]

[SCSS, 20mins](https://www.youtube.com/watch?v=Zz6eOVaaelI)

[React, 32 vids playlist](https://www.youtube.com/watch?v=4pO-HcG2igk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=9)

# How to Navigate the Project


# Important Notes

1. **Don't edit the index.css directly, edit the scss file instead**

# set up

Do these before starting your development

## Global Dev Env

### Install SCSS

1. Go to [this link](https://sass-lang.com/install/) to install SCSS on your system

2. check if the scss is working by using `scss --version` on your command line

## Frontend

### Activate SCSS watch

1. In a separate terminal, navigate to the project root, and run ` sass --watch .\frontend\scss\main.scss:.\frontend\src\index.css`

2. This terminal will now watch for styling changes and automatically compile them to css

### Install frontend packages

1. navigate to the frontend folder `cd .\frontend\`

2. install all dependencies `npm install`

## Backend:

1. navigate to backend `cd .\backend\`

2. set up virtual environment: `py -3.11 -m venv .venv`

3. install requirements: `pip install -r requirements.txt`

# Starting the project

1. navigate to the frontend folder `cd .\frontend\`

2. In a separate terminal, run `npm run dev`

3. this terminal will now start the react app in dev mode