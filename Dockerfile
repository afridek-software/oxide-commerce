# Use a specific Node.js version (erbium) with Alpine Linux as the base image
FROM node:erbium-alpine3.14

# Set the environment variable for the application port
ENV PORT=5500

# Create the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the compiled TypeScript code (dist directory) to the container
COPY dist/oxide-commerce ./dist/oxide-commerce

# Expose the specified port
EXPOSE 5500

# Command to start the application
CMD ["yarn", "start"]
