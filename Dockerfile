# syntax=docker/dockerfile:1
# Build Command: docker build -t divine .
# Run Command: docker run -dp 3000:3000 divine
FROM node:18-alpine
WORKDIR /src
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000