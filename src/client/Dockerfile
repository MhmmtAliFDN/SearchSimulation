# Base image
FROM node:16.18.0 AS build-release

ARG API_BASE_URL="http://localhost:8080/search/"
ENV API_BASE_URL=$API_BASE_URL

# Set working directory
WORKDIR /app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create a smaller production image
FROM nginx

WORKDIR /usr/share/nginx/html
COPY --from=build-release /app/dist .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
