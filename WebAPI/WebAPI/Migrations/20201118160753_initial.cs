using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidates",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(11)", nullable: false),
                    Position = table.Column<string>(type: "nvarchar(25)", nullable: false),
                    TaskIssueDate = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    HiringEmployee = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    TimeLimitation = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    Mentor = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    TaskCompleteDate = table.Column<string>(type: "nvarchar(18)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidates", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidates");
        }
    }
}
