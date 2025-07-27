
# 🐳 Dockerized Full Stack App (React + Node.js)

This project is a simple full stack application containing a **frontend built with React** and a **backend built with Node.js (Express)**. It is fully containerized using Docker and orchestrated with Docker Compose. CI/CD is configured using GitHub Actions to build and push Docker images to Docker Hub.

## 📁 Project Structure

```
.
├── backend
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
├── frontend
│   ├── Dockerfile
│   ├── App.js
│   └── package.json
├── docker-compose.yml
└── .github/workflows/docker-publish.yml
```

## 🚀 Run Locally with Docker Compose

To run both the frontend and backend locally:

```bash
docker-compose up --build
```

### Access:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

## 🐳 Build & Push Docker Images (Manual)

### Build Docker Images

```bash
docker build -t yourdockerhubusername/backend:latest ./backend
docker build -t yourdockerhubusername/frontend:latest ./frontend
```

### Push Docker Images to Docker Hub

```bash
docker push yourdockerhubusername/backend:latest
docker push yourdockerhubusername/frontend:latest
```

## 📥 Pull & Run from Docker Hub (No Code Needed)

Anyone can pull and run your app from Docker Hub:

```bash
docker pull yourdockerhubusername/backend:latest
docker pull yourdockerhubusername/frontend:latest
```

### Run Containers Locally

```bash
docker run -p 5000:5000 yourdockerhubusername/backend:latest
docker run -p 3000:3000 yourdockerhubusername/frontend:latest
```

## ⚙️ GitHub Actions CI/CD Pipeline

The GitHub Actions pipeline automatically:

1. Logs into Docker Hub using secrets.
2. Builds Docker images for frontend and backend.
3. Pushes both to Docker Hub on every push to `main`.

### GitHub Secrets Required:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

> **Add them in GitHub**:
> `Repo → Settings → Secrets → Actions`

## 🔐 GitHub Workflow Sample (`.github/workflows/docker-publish.yml`)

```yaml
name: Docker Build and Push

on:
  push:
    branches: [ "main" ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Log in to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: Build and push Backend
      run: |
        docker build -t ${{ secrets.DOCKER_USERNAME }}/backend:latest ./backend
        docker push ${{ secrets.DOCKER_USERNAME }}/backend:latest

    - name: Build and push Frontend
      run: |
        docker build -t ${{ secrets.DOCKER_USERNAME }}/frontend:latest ./frontend
        docker push ${{ secrets.DOCKER_USERNAME }}/frontend:latest
```

## 📦 Ports Used

| Service  | Container Port | Host Port | Dockerfile `EXPOSE` |
|----------|----------------|-----------|----------------------|
| Frontend | 3000           | 3000      | `EXPOSE 3000`        |
| Backend  | 5000           | 5000      | `EXPOSE 5000`        |

> These ports are defined in Dockerfiles and mapped via Docker Compose or `docker run`.

## 📌 Notes

- Frontend is built with `create-react-app` and served via `npx serve -s build`.
- Backend is a simple Express.js app responding on port `5000`.
- Docker Compose spins up both services with correct networking.

## ✅ To-Do (Optional Enhancements)

- Add `.env` file support for config and secrets
- Add NGINX reverse proxy for production
- Enable volume mounts for dev
- Add tests for frontend/backend

## 🧑‍💻 Author

- GitHub: [chhitij](https://github.com/chhitij)
- Docker Hub: [chhitij91](https://hub.docker.com/u/chhitij91)

---

Made with ❤️ using Docker, React, Node.js, and GitHub Actions
