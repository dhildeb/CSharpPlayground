using Microsoft.AspNetCore.Mvc;
using CSharpPlayground.Models;
using Microsoft.Extensions.Logging;

namespace CSharpPlayground.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static List<TodoItem> _todos = new List<TodoItem>();
        private readonly ILogger<TodoController> _logger;

        public TodoController(ILogger<TodoController> logger)
        {
            _logger = logger;
        }

        // GET: api/todo
        [HttpGet]
        public IActionResult GetAll()
        {
            _logger.LogDebug("test");
            return Ok(_todos);
        }

        // GET: api/todo/1
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var todo = _todos.FirstOrDefault(t => t.Id == id);
            if (todo == null)
                return NotFound();
            
            return Ok(todo);
        }

        // POST: api/todo
        [HttpPost]
        public IActionResult Create(TodoItem todo)
        {
            todo.Id = _todos.Count + 1;
            _todos.Add(todo);
            return CreatedAtAction(nameof(GetById), new { id = todo.Id }, todo);
        }

        // PUT: api/todo/1
        [HttpPut("{id}")]
        public IActionResult Update(int id, TodoItem todo)
        {
            var existingTodo = _todos.FirstOrDefault(t => t.Id == id);
            if (existingTodo == null)
                return NotFound();

            existingTodo.Title = todo.Title;
            existingTodo.IsCompleted = todo.IsCompleted;
            
            return Ok(existingTodo);
        }

        // DELETE: api/todo/1
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _todos.FirstOrDefault(t => t.Id == id);
            if (todo == null)
                return NotFound();

            _todos.Remove(todo);
            return NoContent();
        }
    }
}