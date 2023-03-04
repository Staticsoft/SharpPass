﻿using Staticsoft.Contracts.Abstractions;
using Staticsoft.HttpCommunication.Abstractions;

namespace Staticsoft.SharpPass.Contracts;

public class Auth
{
    public Auth(Jwt jwt, HttpEndpoint<SignUpRequest, SignUpResponse> signUp)
        => (Jwt, SignUp)
        = (jwt, signUp);

    public Jwt Jwt { get; }

    [Endpoint(HttpMethod.Post, pattern: "users")]
    public HttpEndpoint<SignUpRequest, SignUpResponse> SignUp { get; }
}
