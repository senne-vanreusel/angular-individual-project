using Movie.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.DAL.Data
{
    public class DBInitializer
    {
        public static void Initialize(MovieContext context)
        {
            context.Database.EnsureCreated();

            // Look for any products.
            if (context.Movies.Any())
            {
                return;   // DB has been seeded
            }

            //Add products
            context.AddRange(
                new MovieWatch { Id = 642885, Watched = true , Rating = 4.5, Comment = "wubbalubbadubdub"}
                );

                       context.SaveChanges();
        }
    }
}
