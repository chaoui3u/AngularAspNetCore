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
        static List<Models.Message> messages =
            new List<Models.Message>{
            new Models.Message{
                owner="owner test",
                text="text test"
                },
            new Models.Message{
                owner="owner test2",
                text="text test2"
                }
            };
        public IEnumerable<Models.Message> Get()
        {
            return messages;
        }

        [HttpGet("{name}")]
        public IEnumerable<Models.Message> Get(string name)
        {
            return messages.FindAll(message => message.owner == name);
        }

        [HttpPost]
        public Models.Message Post([FromBody]Models.Message message)
        {
            messages.Add(message);
            return message;
        }
    }
}