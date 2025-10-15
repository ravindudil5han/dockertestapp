# Use the official Node.js 20 LTS image (alpine variant for smaller size) as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to the working directory. This helps Docker cache the npm install step.
COPY package.json .

# Install project dependencies. Since your app is zero-dependency, this will be very fast.
# We comment it out since there are no dependencies.
# RUN npm install

# Copy the main application script into the container
COPY temp_test_app.js .

# Command to run the application when the container starts.
# This executes "node temp_test_app.js" using the script defined in package.json.
CMD [ "npm", "start" ]
