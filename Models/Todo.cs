using System.ComponentModel.DataAnnotations;

namespace BlazorApp1.Models;

public class Todo
{
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Title { get; set; } = string.Empty;

    public bool IsCompleted { get; set; }
} 