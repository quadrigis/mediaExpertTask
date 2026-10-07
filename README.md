# 🏪 StoreHouse

![Build](https://github.com/TWOJ_LOGIN/MediaExpertTask/actions//build.yml/badge.svg

![.NET](https://img.shields.io/badge/.NET-8-512BD4?style=for-the-badge&logo=dotnet)
![Angular](https://img.shields.io/blar-20-DD0031?style=for-the-badge&logo=angular)
![Swagger](https://img.shields.io/badge/OpenAPI-Swagger-85EA2the-badge&logo=swagger)
![xUnit](https://img.shields.io/badge/xUnit-Tests-successhe-badge)
![FluentValidation](https://img.shieldsbled-success?style=for-the-badge

---

## 📖 Overview

StoreHouse is a full-stack product catalog application built with ASP.NET Core Web API and Angular.

Features:

- Display product catalog
- Add new products
- Backend validation
- REST API communication
- Swagger documentation
- Unit tests
- GitHub Actions CI

---

## 🚀 Technologies

### Backend

- .NET 8
- ASP.NET Core Web API
- Swagger / OpenAPI
- FluentValidation
- Dependency Injection
- Repository Pattern
- In-Memory Storage

### Frontend

- Angular
- TypeScript
- Reactive Forms
- Angular Material
- RxJS

### Testing

- xUnit
- Moq
- FluentAssertions

### CI/CD

- GitHub Actions

---

## 📂 Project Structure

```text
MediaExpertTask/
│
├── StoreHouse.Api/
│   ├── StoreHouse.sln
│   ├── Controllers/
│   ├── DTOs/
│   ├── Middleware/
│   ├── Models/
│   ├── Repositories/
│   ├── Services/
│   ├── Validators/
│   └── StoreHouse.Api.csproj
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
│   └── tsconfig.json
│
└── .github/
    └── workflows/
        └── build.yml
```

---

## 🏗️ Architecture

```text
Angular UI
    │
    ▼
ProductsService
    │
    ▼
REST API
    │
    ▼
ProductsController
    │
    ▼
ProductService
    │
    ▼
ProductRepository
    │
    ▼
InMemory Storage
```

---

## ⚙️ Run Backend

Navigate to:

```bash
cd StoreHouse.Api
```

Restore dependencies:

```bash
dotnet restore StoreHouse.sln
```

Build:

```bash
dotnet build StoreHouse.sln
```

Run:

```bash
dotnet run
```

---

## 🌐 Swagger

After startup open:

```text
https://localhost:xxxx/swagger
```

Swagger allows testing all available API endpoints.

---

## 📡 API Endpoints

### Get Products

```http
GET /api/products
```

### Create Product

```http
POST /api/products
```

Example request:

```json
{
  "code": "P001",
  "name": "Laptop",
  "price": 3499.99
}
```

Example response:

```json
{
  "id": "guid",
  "code": "P001",
  "name": "Laptop",
  "price": 3499.99
}
```

---

## ✅ Validation

Validation is implemented using FluentValidation.

Rules:

| Field | Rule |
|--------|--------|
| Code | Required |
| Name | Required |
| Price | Greater than 0 |

---

## 💾 Data Storage

Products are stored in-memory.

No database is required.

Data is cleared when the application restarts.

---

## 🖥️ Run Frontend

Navigate to:

```bash
cd StoreHouse.Web
```

Install packages:

```bash
npm install
```

Run Angular:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

---

## 🧪 Run Tests

```bash
dotnet test StoreHouse.Tests
```

Covered scenarios:

- Product creation
- Product retrieval
- Validation rules

---

## 🔄 Continuous Integration

GitHub Actions automatically verifies:

- Solution restore
- Solution build
- Unit tests
- Angular build

Workflow location:

```text
.github/workflows/build.yml
```

---

## 🎯 Design Decisions

### Repository Pattern

Separates data access from business logic.

### Service Layer

Keeps controllers thin and focused on HTTP concerns.

### DTOs

Separate API contract from domain models.

### FluentValidation

Provides clean and testable validation.

### In-Memory Repository

Chosen to satisfy task requirements while keeping the implementation simple.

---

## 🔮 Future Improvements

- Edit product
- Delete product
- Search products
- Pagination
- SQL database
- Docker support
- Integration tests
- Authentication
- Authorization

---

## 👨‍💻 Author

**Michał Jędruch**

Recruitment assignment for .NET Fullstack Developer position.