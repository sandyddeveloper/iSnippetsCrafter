# Dockerfile for Next.js frontend
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package.json /app/
COPY package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . /app/

# Expose the Next.js default port
EXPOSE 3000

# Command to run Next.js in development mode
CMD ["npm", "run", "dev"]
