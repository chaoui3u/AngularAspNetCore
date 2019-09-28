using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoardBackend.Models
{
    public class Message
    {
        public string Id { get; set; }
        public string owner { get; set; }
        public string text { get; set; }
    }
}
