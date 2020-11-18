using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Candidate
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string FullName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(11)")]
        public string PhoneNumber { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(25)")]
        public string Position { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string TaskIssueDate { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string HiringEmployee { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string TimeLimitation { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        [DefaultValue("")]
        public string Mentor { get; set; }

        [Column(TypeName = "nvarchar(18)")]
        [DefaultValue("")]
        public string TaskCompleteDate { get; set; }
    }
}