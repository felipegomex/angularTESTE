using Dapper;
using Microsoft.Data.SqlClient;
using PageSuporte.Models;

namespace PageSuporte.Service
{
  public class OperadorService : IOperadorInterface
  {
    private readonly IConfiguration _configuration;
    public OperadorService(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    private static async Task<IEnumerable<Operador>> ListarOperadoresList(SqlConnection connection)
    {
      return await connection.QueryAsync<Operador>("select * from tboperador");
    }
    private static async Task<IEnumerable<criarOperador>> ListarOperadores(SqlConnection connection)
    {
      return await connection.QueryAsync<criarOperador>("select * from tboperador");
    }
    public async Task<ResponseModel<List<Operador>>> BuscarOperadores()
    {

      ResponseModel<List<Operador>> response = new ResponseModel<List<Operador>>();


      using (var connection = new SqlConnection(_configuration.GetConnectionString("PageSuporte")))
      {
        var operadoresBanco = await connection.QueryAsync<Operador>("select * from tboperador(nolock)");

        if(operadoresBanco.Count() == 0)
        {
          response.Mensagem = "Nenhum usuário localizado.";
          response.Status = false;
          return response;
        }


        response.Dados = operadoresBanco.ToList();
        response.Mensagem = "Usuários Localizados com sucesso.";
      }
      return response;
    }
    public async Task<ResponseModel<List<Operador>>> BuscarOperadorByName(string operadorNome)
    {
      ResponseModel<List<Operador>> response = new ResponseModel<List<Operador>>();

      using (var connection = new SqlConnection(_configuration.GetConnectionString("PageSuporte")))
      {
        var operadorBanco = await connection.QueryAsync<Operador>("select * from tboperador(nolock) where operador_id like concat(@operadorNome, '%')", new {operadorNome});

        if(operadorBanco == null)
        {
          response.Mensagem = "Nenhum usuário localizado.";
          response.Status = false;
          return response;
        }


        response.Dados = operadorBanco.ToList();
        response.Mensagem = "Usuários Localizados com sucesso.";
        return response;
      }
    }
    public async Task<ResponseModel<List<criarOperador>>> CriarOperador(criarOperador criarOperador)
    {
      {
      ResponseModel<List<criarOperador>> response = new ResponseModel<List<criarOperador>>();

      using (var connection = new SqlConnection(_configuration.GetConnectionString("PageSuporte")))
      {
        var inserirOperador = await connection.ExecuteAsync("insert into tboperador (OPERADOR_ID,NOME,SENHA,EMAIL,SE_ADMIN,SE_ATIVO,PERFIL_SKIN, DATA_ULTIMO_ACESSO, DATA_INCLUSAO, USUARIO_INCLUSAO, DATA_ALTERACAO, USUARIO_ALTERACAO, PERFIL_ID) " +
          "values (@Operador_ID, @Nome, @Senha, @Email, @Se_Admin,@Se_Ativo, Null, Null, Getdate(), @Usuario_Inclusao, Null, Null, @Perfil_Id)", criarOperador);

        if(inserirOperador == 0)
        {
          response.Mensagem = "Ocorreu um erro ao incluir o operador.";
          response.Status = false;
          return response;
        }

          var operadores = await ListarOperadores(connection);
          response.Dados = operadores.ToList();
          return response;
      }
    }
    }
    public async Task<ResponseModel<List<editarOperador>>> EditarOperador(editarOperador editarOperador)
    {
      ResponseModel<List<editarOperador>> response = new ResponseModel<List<editarOperador>>();

      using (var connection = new SqlConnection(_configuration.GetConnectionString("PageSuporte")))
      {
        var operadoresBanco = await connection.ExecuteAsync("update tboperador set nome = @Nome,senha = @Senha, email = @Email, se_admin = @Se_Admin, se_ativo = @Se_Ativo, perfil_skin = Perfil_Skin, perfil_id = @Perfil_Id where operador_id = @Operador_ID", editarOperador);

        if(operadoresBanco == 0)
        {
          response.Mensagem = "Ocorreu um erro ao realizar a edição.";
          response.Status = false;
          return response;
        }
        //var operadoresBancoAtualizado = await connection.QueryAsync<editarOperador>("select * from tboperador(nolock)");
        //response.Dados = operadoresBancoAtualizado.ToList();
        response.Status = true;
        response.Mensagem = "Operador atualizado com sucesso!";
      }

      return response;
    }
    public async Task<ResponseModel<List<Operador>>> DeletarOperador(string operador_id)
    {
      {
        ResponseModel<List<Operador>> response = new ResponseModel<List<Operador>>();

        using (var connection = new SqlConnection(_configuration.GetConnectionString("PageSuporte")))
        {
          var deletarOperador = await connection.ExecuteAsync("delete from tboperador where operador_id = @operador", new { operador = operador_id });

          if (deletarOperador == 0)
          {
            response.Mensagem = "Ocorreu um erro ao deletar o operador.";
            response.Status = false;
            return response;
          }

          var operadores = await ListarOperadoresList(connection);
          response.Dados = operadores.ToList();
          return response;
        }
      }
    }

  }

}
