using PageSuporte.Models;


namespace PageSuporte.Service
{

  public interface IOperadorInterface
  {

    Task<ResponseModel<List<Operador>>> BuscarOperadores();
    Task<ResponseModel<List<Operador>>> BuscarOperadorByName(string operadorNome);
    Task<ResponseModel<List<criarOperador>>> CriarOperador(criarOperador criarOperador);
    Task<ResponseModel<List<editarOperador>>> EditarOperador(editarOperador editarOperador);
    Task<ResponseModel<List<Operador>>> DeletarOperador(string operador_id);

  }
}
