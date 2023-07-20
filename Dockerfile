FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --if-present
CMD [ "node", "dist/main.js" ]
EXPOSE 3000