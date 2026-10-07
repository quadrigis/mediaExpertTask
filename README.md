# 🏪 StoreHouse

[![Build & Test](https://github.com/quadrigis/mediaExpertTask/actions/workflows/build.yaml/badge.svg)](https://github.com/quadrigis/mediaExpertTask/actions/workflows/build.yaml)
![.NET 8](https://img.shields.io/badge/.NET-8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-Web-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![xUnit](https://img.shields.io/badge/xUnit-Tests-5E5E5E?style=for-the-badge)
![FluentValidation](https://img.shields.io/badge/FluentValidation-Validation-0A98F7?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

A full-stack product catalog application built with ASP.NET Core Web API and Angular.

---

## 📖 Overview

StoreHouse is a recruitment project demonstrating a clean and maintainable approach to building a small full-stack application.

The application allows users to:

- display the product catalog,
- add new products,
- validate product data,
- communicate with a REST API,
- test backend business logic,
- verify the build automatically using GitHub Actions.

---

## ✨ Features

### Backend

- REST API implemented with ASP.NET Core
- Retrieve all products
- Add a new product
- In-memory product repository
- Dependency Injection
- Service and Repository layers
- Request validation with FluentValidation
- Global exception handling
- Swagger UI and OpenAPI documentation
- CORS configuration for the Angular application

### Frontend

- Product list
- Product creation form
- Reactive Forms
- Client-side validation
- REST API communication
- Loading and error handling
- Responsive user interface

### Quality

- Unit tests with xUnit
- Test doubles with Moq
- Readable assertions with FluentAssertions
- Continuous Integration with GitHub Actions
- Shared code formatting rules with `.editorconfig`

---

## 🧰 Technology Stack

### Backend

| Technology | Purpose |
|---|---|
| .NET 8 | Application platform |
| ASP.NET Core | REST API |
| FluentValidation | Request validation |
| Swagger / OpenAPI | API documentation |
| In-memory repository | Product storage |

### Frontend

| Technology | Purpose |
|---|---|
| Angular | Frontend framework |
| TypeScript | Application language |
| Reactive Forms | Form handling and validation |
| RxJS | Asynchronous API communication |

### Tests and automation

| Technology | Purpose |
|---|---|
| xUnit | Unit test framework |
| Moq | Mocking dependencies |
| FluentAssertions | Readable test assertions |
| GitHub Actions | Automated build and test pipeline |

---

## 📂 Project Structure

```text
MediaExpertTask/
│
├── StoreHouse.Api/
│   ├── Controllers/
│   ├── DTOs/
│   ├── Middleware/
│   ├── Models/
│   ├── Repositories/
│   ├── Services/
│   ├── Validators/
│   ├── Program.cs
│   ├── StoreHouse.Api.csproj
│   └── StoreHouse.sln
│
├── StoreHouse.Tests/
│   ├── Services/
│   ├── Validators/
│   └── StoreHouse.Tests.csproj
│
├── StoreHouse.Web/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── .github/
│   └── workflows/
│       └── build.yml
│
├── .editorconfig
├── .gitignore
└── README.md
