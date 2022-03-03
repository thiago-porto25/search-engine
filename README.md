# Getting Started with Project

### here's what you need to run the project:

- Git with SSH key configured
- Node JS version 17.5
- npm 8.4.1


### How it was done
You can take a look at how was the proccess to create this app in my [projects board](https://github.com/thiago-porto25/search-engine/projects/1). In it you can find all the tasks created for the project and if you click them you will be redirected to their correspondent Issue and you will be able to find more information about those tasks. I would recommend taking a look the design Issues as they have a link to the Figma for the project.


### How to run the project

First you must clone this repository and the [API repository](https://github.com/thiago-porto25/search-engine-api):
```bash
git clone git@github.com:thiago-porto25/search-engine.git

git clone git@github.com:thiago-porto25/search-engine-api.git
```

After that you must cd into both directiories and run `npm install` to install their dependencies:

```bash
# search-engine

cd search-engine

npm install
```

```bash
# search-engine-api

cd search-engine-api

npm install
```

Afterwards you must start the projects:

```bash
# search-engine

npm start
```

```bash
# search-engine-api

npm run dev
```

After that go to your browser at `localhost:3000` and interact with the app. In it you can search for different words. Because the sample array is limited I would suggest searching for these words:

- Dog
- Cat
- Field
- Space
- Football
- Basketball
- Developer
- Beach

#### Ps.: You must run both projects together for them to work properly.
