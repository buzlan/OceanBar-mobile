## mobile app
FROM node:14.17.6
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
CMD ["npm", "run", "android"]