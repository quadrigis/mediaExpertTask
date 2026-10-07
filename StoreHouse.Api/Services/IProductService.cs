using StoreHouse.Api.DTOs;

namespace StoreHouse.Api.Services;

public interface IProductService
{
    IEnumerable<ProductResponse> GetAll();
    ProductResponse Add(CreateProductRequest request);
}
