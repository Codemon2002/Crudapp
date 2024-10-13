# Docker Setup for Node.js Application

## Dockerfile

```Dockerfile
# Base image
FROM node

# Set working directory
WORKDIR /app

# Copy the entire project to the /app directory
COPY . /app

# Install dependencies
RUN npm install

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

## Docker Build image 
```
docker build .
```
## Stop a Docker Container
```
docker stop <container_name>
```
## Remove a Docker Container
```
docker rm <container_name>
```
## Force Remove a Docker Container
```
docker rm -f <container_name>
```

# Using Volumes for Live Syncing

## Bind Mount (Windows)
```
docker run -v %cd%:/app -p 3000:3000 -d --name express-container <image-name>
```
## Bind Mount (Mac/Linux)
```
docker run -v ${pwd}:/app -p 3000:3000 -d --name express-container <image-name>
```
## Access Docker Container (Bash)
```
docker exec -it <container_name> bash
```

# Handling Volumes

### Bind Mount and Sync Code
#### Changes won’t automatically reflect in Docker unless you use a volume.

## Docker Compose Commands

```bash
# Run Development Environment
docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up -d

# Stop Development Environment
docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml down

# Run Production Environment
docker-compose -f docker-compose.yaml -f docker-compose-prod.yaml up -d

# Stop Production Environment
docker-compose -f docker-compose.yaml -f docker-compose-prod.yaml down
