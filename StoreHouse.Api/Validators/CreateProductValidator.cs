using FluentValidation;
using StoreHouse.Api.DTOs;

namespace StoreHouse.Api.Validators;

public class CreateProductRequestValidator : AbstractValidator<CreateProductRequest>
{
    public CreateProductRequestValidator()
    {
        RuleFor(x => x.Code)
        .NotEmpty()
        .MaximumLength(50);

        RuleFor(x => x.Name)
        .NotEmpty()
        .MaximumLength(200);

        RuleFor(x => x.Price)
        .GreaterThan(0);
    }
}
