# Crezalo (previously Kigzag)

Crezalo is a creator monetization service that allows creators to generate a link similar to Linktree. Through this link, creators can sell access to premium videos, courses, merchandise, and receive tips. This application was built with a Next.js TypeScript frontend and a Node.js backend.

## Table of Contents

- [About](#about)
- [Architecture](#architecture)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Video Streaming](#video-streaming)
  - [File Storage](#file-storage)
  - [Database](#database)
  - [Authentication](#authentication)
  - [Deployment](#deployment)
- [Features](#features)
- [Setup](#setup)
- [Contributing](#contributing)
- [License](#license)

## About

Crezalo was designed to help creators monetize their content easily. By creating a personalized link, creators could offer various premium services to their audience. The service is no longer functional as it was acquired by a leading competitor.

Visit our info website: [Crezalo](https://crezalo.github.io/)

## Architecture

### Frontend

The frontend of Crezalo is built using [Next.js](https://nextjs.org/) with TypeScript and Tailwinf CSS framework for styling with flexibility and speed. This ensures a modern, scalable, and efficient development experience.

### Backend

The backend server is responsible for handling API requests and is built using [Node.js](https://nodejs.org/).

### Video Streaming

Crezalo includes a video streaming server to handle video and image uploads or fetch requests. This server manages the storage and delivery of multimedia content.

### File Storage

Files, including videos, images, and user verification documents, are stored in S3 buckets. These files are accessed via CloudFront using server-signed URLs with an expiration time for security.

### Database

We use an RDBMS Postgres database to manage and store application data efficiently.

### Authentication

We use Firebase-based login for mobile numbers and Google accounts. Guest login is also offered by default.

### Deployment

- **Backend and Video Applications**: Deployed on AWS App Runner (managed container apps) for auto-scaling.
- **Frontend (Next.js App)**: Scaled separately, cached, and made available using CloudFront CDN.
- **Video Streaming**: Video files are stored in multiple definitions and served via CloudFront. AWS Lambda functions dynamically choose the best video definition based on the client's network connection.

## Features

- Personalized creator links for monetization.
- Sell access to premium videos, courses, and merchandise.
- Receive tips from followers.
- Secure file storage and delivery using AWS S3 and CloudFront.
- Scalable and efficient architecture with auto-scaling and CDN support.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/crezalo/crezalo.git
   cd crezalo

2. **Install dependencies**:
   ```bash
   npm install

3. Setup environment variables: Create a `.env` file in the root directory and add the necessary environment variables.

4. **Run the development server**:
   ```bash
   npm run dev

5. **Build for production**:
   ```bash
   npm run build

## Contributing

We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note**: This product is no longer functional as it was acquired by a leading competitor.

---

For any questions or support, please visit our info website: [Crezalo](https://crezalo.github.io/)
