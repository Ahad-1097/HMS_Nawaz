using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Migrations
{
    public partial class changedb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InvestigationImages_Investigation_InvestigationID",
                table: "InvestigationImages");

            migrationBuilder.DropIndex(
                name: "IX_InvestigationImages_InvestigationID",
                table: "InvestigationImages");

            migrationBuilder.AddColumn<int>(
                name: "Investigation",
                table: "InvestigationImages",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Investigation",
                table: "InvestigationImages");

            migrationBuilder.CreateIndex(
                name: "IX_InvestigationImages_InvestigationID",
                table: "InvestigationImages",
                column: "InvestigationID");

            migrationBuilder.AddForeignKey(
                name: "FK_InvestigationImages_Investigation_InvestigationID",
                table: "InvestigationImages",
                column: "InvestigationID",
                principalTable: "Investigation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
