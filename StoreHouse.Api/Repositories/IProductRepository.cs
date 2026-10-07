using StoreHouse.Api.Models;

namespace StoreHouse.Api.Repositories;

public interface IProductRepository
{
    IEnumerable<Product> GetAll();
    Product Add(Product product);
}
