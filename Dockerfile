FROM node
# set the working directory
# all the command will be executed inside this directly
WORKDIR /app
# COPY package.json /app
# COPY server.js /app
# compile time command (build the image)
COPY package* /app

ARG NODE_ENV
RUN if [ "${NODE_ENV}" = "development"]; \
then npm install; \ 
else npm install --only=production; \
fi

# it will install all the dependencies from package.json
COPY . /app
ENV PORT 4000
EXPOSE ${PORT}
# CMD ["nodemon", "server.js"]
CMD ["node", "server.js"]


#terminal code -> docker build .

# docker stop container name
# docker remove container name 

# or

# docker remove container name -f 


# to directly commit the changes in the docker we have to use volumes
# - there is a specific type of volume known as Bind Mount 
# - It allows us to sync our file system with /app directory

# So now we have to use new command 
# - docker run -v %cd%:/app -p 3000:3000 -d --name express-container image-name
# for mac/ linux
# - docker run -v ${pwd}:/app -p 3000:3000 -d --name express-container image-name

# docker exec -it container_name bash
# to get inside docker environment


#docker run -v ${pwd}:/app:ro -v /app/node_module --env-file ./.env -p 3000:3000 -d --name node-app-container express-app-image