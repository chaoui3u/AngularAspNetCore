﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    public class JwtPacket
    {
        public string Token { get; set; }
    }

    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        [HttpPost("register")]
        public JwtPacket Register([FromBody]Models.User user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().
                WriteToken(jwt);

            return new JwtPacket() { Token = encodedJwt };
        }
    }
}