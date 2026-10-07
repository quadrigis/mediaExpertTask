using StoreHouse.Api.Models;

namespace StoreHouse.Api.Repositories;

public class InMemoryProductRepository : IProductRepository
{
    private readonly List<Product> _products = [];

    public IEnumerable<Product> GetAll() => _products;

    public Product Add(Product product)
    {
        _products.Add(product);
        return product;
    }
}