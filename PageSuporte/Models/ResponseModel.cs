namespace PageSuporte.Models
{
  public class ResponseModel<T>
  {

    public T? Dados { get; set; } // O tipo 'T' indica que essa propriedade pode ser de qualquer tipo. o "?" indica que pode ser nulo.
    public string Mensagem { get; set; } = string.Empty;
    public bool Status { get; set; } = true;
  }
}
