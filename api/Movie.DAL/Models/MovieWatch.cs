using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.DAL.Models
{
    public class MovieWatch
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public bool Watched { get; set; } = false;
        public double Rating { get; set; }
        public string Comment { get; set; }
    }
}
