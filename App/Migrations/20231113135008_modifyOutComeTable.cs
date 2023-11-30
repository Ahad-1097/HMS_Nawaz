using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Migrations
{
    public partial class modifyOutComeTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DischargeDate",
                table: "Outcome");

            migrationBuilder.AlterColumn<string>(
                name: "outcomeType",
                table: "Outcome",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "Outcome",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "PatientID",
                table: "Outcome",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Outcome");

            migrationBuilder.DropColumn(
                name: "PatientID",
                table: "Outcome");

            migrationBuilder.AlterColumn<int>(
                name: "outcomeType",
                table: "Outcome",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DischargeDate",
                table: "Outcome",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
