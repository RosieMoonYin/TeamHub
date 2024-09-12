using Microsoft.EntityFrameworkCore;

namespace teamhub_backend;

public class TeamhubDbContext : DbContext
{
    public DbSet<Meeting> Meetings { get; set; }
    public DbSet<Post> Posts { get; set; }

    public TeamhubDbContext(DbContextOptions<TeamhubDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // DbSeeder.(modelBuilder);
    }
}

