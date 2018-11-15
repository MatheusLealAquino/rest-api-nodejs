module.exports = app => {
    app.get('/', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.json({
            msg: "Welcome to my API :)"
        });
    });
};