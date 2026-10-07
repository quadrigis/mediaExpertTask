using FluentAssertions;
using Moq;
using StoreHouse.Api.DTOs;
using StoreHouse.Api.Models;
using StoreHouse.Api.Repositories;
using StoreHouse.Api.Services;

namespace StoreHouse.Tests.Services;

public class ProductServiceTests
{
    private readonly Mock<IProductRepository> _repository;
    private readonly ProductService _service;

    public ProductServiceTests()
    {
        _repository = new Mock<IProductRepository>();
        _service = new ProductService(_repository.Object);
    }

    [Fact]
    public void Add_Should_Create_Product()
    {
        // arrange
        var request = new CreateProductRequest
        {
            Code = "P001",
            Name = "Laptop",
            Price = 1000
        };

        // act
        var result = _service.Add(request);

        // assert
        result.Should().NotBeNull();
        result.Code.Should().Be("P001");
        result.Name.Should().Be("Laptop");
        result.Price.Should().Be(1000);
        _repository.Verify(r => r.Add(It.IsAny<Product>()), Times.Once);
    }

    [Fact]
    public void GetAll_Should_Return_Products()
    {
        // arrange
        var products = new List<Product>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Code = "P001",
                Name = "Laptop",
                Price = 1000
            }
        };

        _repository.Setup(r => r.GetAll()).Returns(products);

        // act
        var result = _service.GetAll();

        // assert
        result.Should().HaveCount(1);
        result.First().Code.Should().Be("P001");
    }
}
