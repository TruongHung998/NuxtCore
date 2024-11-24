# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Nuxt 3 application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Nuxt 3 application
CMD [ "npm", "start" ]