using StoreHouse.Api.DTOs;
using StoreHouse.Api.Models;
using StoreHouse.Api.Repositories;

namespace StoreHouse.Api.Services;

public class ProductService(IProductRepository repository) : IProductService
{
    private readonly IProductRepository _repository = repository;

    public IEnumerable<ProductResponse> GetAll()
    {
        return _repository
        .GetAll()
        .Select(p => new ProductResponse
        {
            Id = p.Id,
            Code = p.Code,
            Name = p.Name,
            Price = p.Price
        });
    }

    public ProductResponse Add(CreateProductRequest request)
    {
        var product = new Product
        {
            Id = Guid.NewGuid(),
            Code = request.Code,
            Name = request.Name,
            Price = request.Price
        };

        _repository.Add(product);

        return new ProductResponse
        {
            Id = product.Id,
            Code = product.Code,
            Name = product.Name,
            Price = product.Price
        };
    }
}
