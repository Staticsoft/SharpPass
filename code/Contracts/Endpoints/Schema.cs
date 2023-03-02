﻿using Staticsoft.Contracts.Abstractions;
using Staticsoft.HttpCommunication.Abstractions;

namespace Staticsoft.SharpPass.Contracts;

public class Schema
{
    public Schema(
        Auth auth,
        Passwords passwords,
        HttpEndpoint<EmptyRequest, PasswordProfiles> listPasswords,
        HttpEndpoint<CreatePasswordRequest, PasswordProfile> createPassword
    )
        => (Auth, Passwords, ListPasswords, CreatePassword)
        = (auth, passwords, listPasswords, createPassword);

    public Auth Auth { get; }
    public Passwords Passwords { get; }

    [Endpoint(HttpMethod.Get, pattern: nameof(Passwords))]
    public HttpEndpoint<EmptyRequest, PasswordProfiles> ListPasswords { get; }

    [Endpoint(HttpMethod.Post, pattern: nameof(Passwords))]
    public HttpEndpoint<CreatePasswordRequest, PasswordProfile> CreatePassword { get; }
}
