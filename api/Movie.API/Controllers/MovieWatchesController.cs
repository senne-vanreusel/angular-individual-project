using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movie.DAL.Models;
using Shop.DAL.Data;

namespace Movie.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieWatchesController : ControllerBase
    {
        private readonly MovieContext _context;

        public MovieWatchesController(MovieContext context)
        {
            _context = context;
        }

        // GET: api/MovieWatches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieWatch>>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
        }

        // GET: api/MovieWatches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieWatch>> GetMovieWatch(int id)
        {
            var movieWatch = await _context.Movies.FindAsync(id);

            if (movieWatch == null)
            {
                return NotFound();
            }

            return movieWatch;
        }

        // PUT: api/MovieWatches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovieWatch(int id, MovieWatch movieWatch)
        {
            if (id != movieWatch.Id)
            {
                return BadRequest();
            }

            _context.Entry(movieWatch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieWatchExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MovieWatches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MovieWatch>> PostMovieWatch(MovieWatch movieWatch)
        {
            _context.Movies.Add(movieWatch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovieWatch", new { id = movieWatch.Id }, movieWatch);
        }

        // DELETE: api/MovieWatches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovieWatch(int id)
        {
            var movieWatch = await _context.Movies.FindAsync(id);
            if (movieWatch == null)
            {
                return NotFound();
            }

            _context.Movies.Remove(movieWatch);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MovieWatchExists(int id)
        {
            return _context.Movies.Any(e => e.Id == id);
        }
    }
}
