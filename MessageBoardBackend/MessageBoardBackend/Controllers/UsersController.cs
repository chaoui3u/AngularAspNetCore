using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("Users")]
    public class UsersController : Controller
    {
        readonly ApiContext context;
        public UsersController(ApiContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id)
        {
            var user = context.Users.SingleOrDefault(u => u.Id == id);
            if (user == null) return NotFound("User Not Founds");
            return Ok(user);
        }
    }
}
