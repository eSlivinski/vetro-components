# [vetro-components -- Vetro FiberMap Style Guide](https://eslivinski.github.io/vetro-components/)

## Setup
- Clone the repo into the same root directory as your local instance of `vetro-main`

## Developing
- `npm install -g http-server` - Install a http server
- `http-server` - Begin serving vetro-components
- `cd ../vetro-main` - Switch into your vetro-main dir
- `vagrant up` - Start vagrant machine

## Deploying to gh-pages
1. Replace symbolic links from dev environment with folders from vetro and update font paths
  - `cd hooks`
  - `sh pre-deploy.sh`
2. Push Changes
  - `git add -A`
  - `git commit -m { Your Msg }`
  - `git push origin gh-pages`
- Reset Dev Environment
  - `sh post-deploy.sh`

## Todo
  - [ ] Create real githooks
  - [ ] Add Angular versions of all components
  - [ ] Update Vetro LESS file organization to match the structure of vetro-components
