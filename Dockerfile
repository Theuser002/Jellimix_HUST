FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
# COPY ./jellimix_vue/package*.json ./

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./jellimix_vue .

# install project dependencies
RUN npm install 
RUN npm run build

EXPOSE 6969
CMD [ "http-server", "-p", "6969", "dist" ]