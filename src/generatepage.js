function generatePage(teamArr) {
    let teamMembers = '';

    for (i = 0; i < teamArr.length; i++) {
        if (teamArr[i].role === 'Manager') {
            teamMembers += `
            <div class="card ml-3">
                    <div class="card-header">
                        <h2 class="Manager Name">${teamArr[i].name}</h2>
                        <span class="oi oi-person"></span> Manager
                    </div>
                    <div class="card-body">
                        <li class="list-item">Employee ID: ${teamArr[i].id}</li>
                        <li class="list-item">Email: <a href=:"mailto:${teamArr[i].email}">${teamArr[i].email}</a></li>
                        <li class="list-item">Office Number: ${teamArr[i].officeNumber}</li>
                    </div>
            </div>`
        } else if (teamArr[i].role === 'Engineer') {
            teamMembers += `
            <div class="card ml-3">
                    <div class="card-header">
                        <h2 class="Engineer Name">${teamArr[i].name}</h2>
                        <span class="oi oi-people"></span> Engineer
                    </div>
                    <div class="card-body">
                        <li class="list-item">Employee ID: ${teamArr[i].id}</li>
                        <li class="list-item">Email: <a href=:"mailto:${teamArr[i].email}">${teamArr[i].email}</a></li>
                        <li class="list-item">Github Username: <a href=:"https://github.com/${teamArr[i].github}">${teamArr[i].github}</a>${teamArr[i].github}</li>
                    </div>
            </div>`
        } else {
            teamMembers += `
            <div class="card ml-3">
                    <div class="card-header">
                        <h2 class="Intern Name">${teamArr[i].name}</h2>
                        <span class="oi oi-people"></span> Intern
                    </div>
                    <div class="card-body">
                        <li class="list-item">Employee ID: ${teamArr[i].id}</li>
                        <li class="list-item">Email: <a href=:"mailto:${teamArr[i].email}">${teamArr[i].email}</a></li>
                        <li class="list-item">School: ${teamArr[i].school}</li>
                    </div>
            </div>`
        }
    }

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <header class="col-12 jumbotron">
                <h1 class="text-center title">
                    My Team
                </h1>
                </header>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                ${teamMembers}
                </div>
            </div>
        </div>
    </body>
    </html>`
    return html;
};

module.exports = generatePage;