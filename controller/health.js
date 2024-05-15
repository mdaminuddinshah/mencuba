export function homepage(req,res){
    try{
        res.status(200);
        res.send("hello amin");
        console.log("connected homepage")
    } catch(err){
        res.status(404);
        res.send("Homepage error");
        console.log("cannot connect to homepage")
    }
}

export function notExistPage(req,res){
    try{
        res.status(404);
        res.send("Page not found");
        console.log("Page not found");
    } catch(err){
        res.status(500);
        res.send("something went wrong");
        consolele.log("something went wrong");
    }
}