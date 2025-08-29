using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PageSuporte.Models;
using PageSuporte.Service;

namespace PageSuporte.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class OperadorController : ControllerBase
    {
    private readonly IOperadorInterface _operadorInterface;
      public OperadorController(IOperadorInterface operadorInterface)
      {
         _operadorInterface = operadorInterface;
      }

    [HttpGet]
    public async Task<IActionResult> BuscarOperadores()
    {
      var operadores = await _operadorInterface.BuscarOperadores();

      if (operadores.Status == false)
      {
        return NotFound(operadores);
      }

      return Ok(operadores);
    }

    [HttpGet("OperadorNome")]
    public async Task<IActionResult> BuscarOperadorbyName(string operadorNome)
    {
      var operador = await _operadorInterface.BuscarOperadorByName(operadorNome);

      if (operador.Status == false)
      {
        return NotFound(operador);
      }

      return Ok(operador);
    }

    [HttpPost]
    public async Task<IActionResult> CriarOperador(criarOperador criarOperador)
    {
      var operador = await _operadorInterface.CriarOperador(criarOperador);

      if (operador.Status == false)
      {
        return NotFound(operador);
      }

      return Ok(operador);
    }

    [HttpPut]
    public async Task<IActionResult> EditarOperador(editarOperador editarOperador)
    {
      var operadores = await _operadorInterface.EditarOperador(editarOperador);
      if (operadores.Status == false)
      {
        return BadRequest(operadores);
      }

      return Ok(operadores);
    }

    [HttpDelete]
    public async Task<IActionResult> DeletarOperador(string operador_id)
    {
      var operadores = await _operadorInterface.DeletarOperador(operador_id);
      if (operadores.Status == false)
      {
        return BadRequest(operadores);
      }

      return Ok(operadores);
    }

  }
}
