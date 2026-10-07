namespace StoreHouse.Api.DTOs;

public class CreateProductRequest
{
    public string Code { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public decimal Price { get; set; }
}
