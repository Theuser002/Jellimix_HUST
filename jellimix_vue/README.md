# jellimix_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Docker Build & Release
```
docker build -t jellimix_HUST/dockerize-jellimix_vue .
docker run -it -p 8080:8080 --rm --name dockerize-jellimix_vue_1 jellimix_HUST/dockerize-jellimix_vue
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
