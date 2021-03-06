# Use an official Node.js runtime as a parent image
# Prefer Alphine over lastest due to size of the docker image
# Alphine distribution also provides less attack surface for hackers
FROM node:8

# Create app directory to hold the application code inside the image
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
