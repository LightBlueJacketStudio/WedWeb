# set up

Do these before starting your development

## Global Dev Env

### Install SCSS

1. Go to [this link](https://sass-lang.com/install/) to install SCSS on your system

2. check if the scss is working by using `scss --version` on your command line

## Frontend

1. In a separate terminal, navigate to the project root, and run ` sass --watch .\frontend\scss\index.scss:.\frontend\src\index.css`

2. This terminal will now watch for styling changes and automatically compile them to css

## Backend:

1. navigate to backend `cd .\backend\`

2. set up virtual environment: `py -3.11 -m venv .venv`

3. install requirements: `pip install -r requirements.txt`

