var http = require("http");
var employeeModule = require("./employeeModule"); 

console.log("Lab 03 - NodeJs");


const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json"); 

    if (req.method !== 'GET') {
        res.statusCode = 405; 
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
        return;
    }

    if (req.url === '/') {
        
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Welcome Lab3</h1>");
        return;
    }

    if (req.url === '/employee') {
        
        const employees = employeeModule.getAllEmployees();
        res.end(JSON.stringify(employees));
        return;
    }

    if (req.url === '/employee/names') {
        
        const employeeNames = employeeModule.getEmployeeNames();
        res.end(JSON.stringify(employeeNames));
        return;
    }

    if (req.url === '/employee/totalsalary') {
        
        const totalSalary = employeeModule.getTotalSalary();
        res.end(JSON.stringify({ total_salary: totalSalary }));
        return;
    }

   
    res.statusCode = 404;
    res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
