using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Hotsite.Models;


namespace Hotsite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Cadastrar(Interesse cad)
        {
            

            try 
            {   DatabaseService dbs = new DatabaseService();
                dbs.CadastraInteresse(cad);

                 TempData["SuccessMessage"] = "Cadastro realizado com sucesso!";

                 return RedirectToAction("Index"); 
            }

            catch (Exception e)
            {
                _logger.LogError("Erro ao conectar com o banco de dados!" + e.Message);

                TempData["ErrorMessage"] = "Ocorreu um erro ao cadastrar. Por favor, tente novamente mais tarde.";
            }

            return View("Index",cad);
        }

    }
}
