namespace PageSuporte.Models
{
  public class criarOperador
  {

    public string Operador_ID { get; set; }
    public string Nome { get; set; }
    public string Senha { get; set; }
    public string Email { get; set; }
    public bool Se_Admin { get; set; } = false; // 0 - Não admin ; 1 - Admin
    public char Se_Ativo { get; set; } = 'S';
    public string Usuario_Inclusao { get; set; }
    public string Perfil_Id { get; set; } // S - Suporte ; P - Programador ; A - Admin ; F - Financeiro

  }
}
