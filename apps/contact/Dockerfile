# Use an official Node.js runtime as a parent image
FROM node:21

# install sendmail
RUN apt-get update && apt-get install -y sendmail

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define environment variables
ENV NODE_ENV production

# Run the application
CMD ["npm", "start"]
