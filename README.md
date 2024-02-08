# Ticketing App

Welcome to the Ticketing App repository! This app is a comprehensive ticketing solution built with Microservices Architecture, utilizing various technologies for both the backend and frontend. If you are a developer eager to contribute, this repository has something for you.

## Features

- **User Authentication:** Sign up and sign in functionality for user accounts.
- **Ticket Management:** Users can sell, buy, and pay for tickets.
- **Order Details:** Users can fetch details of all the orders they have created.
- **Microservices Architecture:** Built with scalable and maintainable microservices.
- **Backend:** Developed with Express.js and TypeScript, using MongoDB as the database.
- **Message Broker:** Nats-streaming-server facilitates communication between different services.
- **Orchestration:** Kubernetes is used as an orchestration tool for efficient deployment and scaling.
- **Frontend:** Utilizes Next.js for server-side rendering to enhance performance.
- **Optimistic Concurrency Control (OCC):** Handles race conditions in the database.
- **Industry Standard Design:** Code is structured and designed following industry best practices.
- **Scalability:** The application is designed to scale easily to accommodate millions of users.
- **Custom npm Package:** A custom npm package is published to npm, containing shared code between services.

## Getting Started

### 1. Clone the GitHub Repository

```bash
git clone git@github.com:Tushar-Kapil/Ticketing.git
```

### 2. Make sure Docker and Kubernetes are installed and running on your local machine.

### 3. Set Kubernetes Secrets

```bash
kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=[YOUR_STRIPE_SECRET_KEY]
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=[JWT_SECRET]
```

### 4. Navigate to Root Project

```bash
cd ticketing
```

### 5. Execute the following command to start the Kubernetes cluster using Skaffold:

```bash
skaffold dev
```

### 6. Once the cluster is up and running, you can access the application at http://localhost:3000.

# Contributing
If you would like to contribute to either the frontend or backend, follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and ensure the code follows the established coding standards.
- Create a pull request to the main branch of this repository.
- Your pull request will be reviewed, and upon approval, it will be merged.
## Thank you for contributing to the Ticketing App!
