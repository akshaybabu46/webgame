# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json first for dependency installation
COPY package.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .


# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
