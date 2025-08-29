using Microsoft.Extensions.DependencyInjection;
using PageSuporte.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<IOperadorInterface, OperadorService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("PageSuporteApp", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseCors("PageSuporteApp");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
