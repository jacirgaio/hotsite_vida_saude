using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hotsite.Models
{
    ///Entidade EF Core Interesse
    public class Interesse
    {
        public int Id { get; set; }

        [StringLength(156)]
        public string Nome { get; set; }

        [StringLength(156)]
        [Required(ErrorMessage = "O campo Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "Por favor, insira um endereço de e-mail válido.")]
         public string Email { get; set; }

        [StringLength(512)]
        public string Mensagem { get; set; }
    }
}