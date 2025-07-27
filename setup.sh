#!/bin/bash
mkdir -p backend frontend .github/workflows

### Create backend files
cat <<EOF > backend/server.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send("Hello from Backend!"));
app.listen(5000, () => console.log("Backend running on port 5000"));
EOF

cat <<EOF > backend/package.json
{
  "name": "backend",
  "main": "server.js",
  "scripts": { "start": "node server.js" },
  "dependencies": { "express": "^4.18.2" }
}
EOF

cat <<EOF > backend/Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EOF

### Create frontend files
cat <<EOF > frontend/App.js
import React from 'react';
export default function App() {
  return <h1>Hello from Frontend (React)</h1>;
}
EOF

cat <<EOF > frontend/package.json
{
  "name": "frontend",
  "version": "1.0.0",
  "main": "App.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  }
}
EOF

cat <<EOF > frontend/Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
EOF

### Docker Compose file
cat <<EOF > docker-compose.yml
version: "3"
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
EOF

### GitHub Action file
cat <<EOF > .github/workflows/docker-publish.yml
name: Build and Push to Docker Hub

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Log in to Docker Hub
      uses: docker/login-action@v3
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}

    - name: Build and push Backend
      run: |
        docker build -t yourdockerhubusername/backend:latest ./backend
        docker push yourdockerhubusername/backend:latest

    - name: Build and push Frontend
      run: |
        docker build -t yourdockerhubusername/frontend:latest ./frontend
        docker push yourdockerhubusername/frontend:latest
EOF
