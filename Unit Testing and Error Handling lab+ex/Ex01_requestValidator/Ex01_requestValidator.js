function solve(obj) {
    //method
    let validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    if (!validMethod.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    //uri
    if (!/^[\w.]*$/gm.test(obj.uri) || obj.uri == undefined || obj.uri == "") {
        throw new Error("Invalid request header: Invalid URI");
    }

    //version
    let validVers = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (!validVers.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    //message
    if (!/^[^<>&\\'"]*$/gm.test(obj.message) || obj.message == undefined) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
}

console.log(solve(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: 'asl<pls'
    }
))
