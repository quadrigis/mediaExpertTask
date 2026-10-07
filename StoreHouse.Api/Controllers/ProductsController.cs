using Microsoft.AspNetCore.Mvc;
using StoreHouse.Api.DTOs;
using StoreHouse.Api.Services;

namespace StoreHouse.Api.Controllers;

[ApiController]
[Route("api/products")]
public class ProductsController(IProductService service) : ControllerBase
{
    private readonly IProductService _service = service;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_service.GetAll());
    }

    [HttpPost]
    public IActionResult Create(CreateProductRequest request)
    {
        var product = _service.Add(request);
        return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
    }
}
