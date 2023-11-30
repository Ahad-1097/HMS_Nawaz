using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Migrations
{
    public partial class ModifyTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Anaesthesia",
                table: "Operation",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OperationTitle",
                table: "Operation",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PreoperativeDiagnosis",
                table: "Operation",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PTDNR_img",
                table: "InvestigationImages",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UrineRM_img",
                table: "InvestigationImages",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Anaesthesia",
                table: "Operation");

            migrationBuilder.DropColumn(
                name: "OperationTitle",
                table: "Operation");

            migrationBuilder.DropColumn(
                name: "PreoperativeDiagnosis",
                table: "Operation");

            migrationBuilder.DropColumn(
                name: "PTDNR_img",
                table: "InvestigationImages");

            migrationBuilder.DropColumn(
                name: "UrineRM_img",
                table: "InvestigationImages");
        }
    }
}
