# Use the official Node.js 20 LTS image (alpine variant for smaller size) as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to the working directory.
COPY package.json .

# Install project dependencies.
# RUN npm install

# Copy the main application script into the container
# FIX: Changed 'temp_test_app.js' to 'index.js'
COPY . . 
# Command to run the application when the container starts.
CMD [ "npm", "start" ]
