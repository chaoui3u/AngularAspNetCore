using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        public IEnumerable<Models.Message> Get()
        {
            return new Models.Message[]{
            new Models.Message{
                owner="owner test",
                text="text test"
                },
            new Models.Message{
                owner="owner test2",
                text="text test2"
                }
            };
        }
    }
}