using FluentValidation;
using FluentValidation.AspNetCore;
using StoreHouse.Api.Middleware;
using StoreHouse.Api.Repositories;
using StoreHouse.Api.Services;
using StoreHouse.Api.Validators;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IProductRepository, InMemoryProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssemblyContaining<CreateProductRequestValidator>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Angular",
        policy =>
        {
            policy
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin();
        });
});

var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();
app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("Angular");
app.MapControllers();
app.Run();