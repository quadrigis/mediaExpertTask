using FluentAssertions;
using StoreHouse.Api.DTOs;
using StoreHouse.Api.Validators;

namespace StoreHouse.Tests.Validators;

public class CreateProductRequestValidatorTests
{
    private readonly CreateProductRequestValidator
    _validator = new();

    [Fact]
    public void Should_Fail_When_Price_Is_Less_Than_Zero()
    {
        var request =
        new CreateProductRequest
        {
            Code = "P001",
            Name = "Laptop",
            Price = -5
        };

        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
    }

    [Fact]
    public void Should_Be_Valid()
    {
        var request = new CreateProductRequest
        {
            Code = "P001",
            Name = "Laptop",
            Price = 1000
        };

        var result = _validator.Validate(request);
        result.IsValid.Should().BeTrue();
    }
}
