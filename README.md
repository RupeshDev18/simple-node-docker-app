# My First Node.js App

This is a simple Node.js application Dockerized for easy deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker installed on your machine. If you haven't installed Docker yet, you can download and install it from the [official Docker website](https://www.docker.com/get-started).

## Building the Docker Image

To build the Docker image for this application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Rupesh180902/simple-node-docker-app.git
   ```
2. Navigate to the directory containing the Dockerfile:
    ```bash
    cd simple-node-docker-app
    ```
3. Run the following command to build the Docker image:
    ```bash
    docker build -t myfirstapp:1 .
    ```

## Running the Docker Container

Once you've built the Docker image, you can run a container based on that image using the following command:
```bash
docker run -p 8080:3000 myfirstapp:1
```

This command maps port 8080 on your host machine to port 3000 inside the Docker container, allowing you to access the application from your web browser at http://localhost:8080.