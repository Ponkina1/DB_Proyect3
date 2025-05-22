////////////////////////////////////////////////////////////////////
//guardado en players coleccion 


document.getElementById("submitPlayer").addEventListener("click", async (event) => {
    alert("llame al boton")
    event.preventDefault();
    alert("Button clicked");

    const idPlayer = document.getElementById("idPlayer").value;
    const totalTimeToPlay = document.getElementById("totalTimeToPlay").value;
    const frecuencyToTrigger = document.getElementById("frecuencyToTrigger").value;
    const numberToDies = document.getElementById("numberToDies").value;
    const relationDiesDowns = document.getElementById("relationDiesDowns").value;
    const playersMoney = document.getElementById("playersMoney").value;

    const data = {
        idPlayer: idPlayer,
        totalTimeToPlay: totalTimeToPlay,
        frecuencyToTrigger: frecuencyToTrigger,
        numberToDies: numberToDies,
        relationDiesDowns: relationDiesDowns,
        playersMoney: playersMoney
    };

    fetch("http://localhost:3000/uploadnosql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Registration failed.");
            }
        })
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering.");
        });
});

///////////////////////////////////////////////
document.getElementById("submitLobbies").addEventListener("click", async (event) => {
    alert("llame al boton")
    event.preventDefault();
    alert("Button clicked");

    const idLobbies = document.getElementById("idLobbies").value;
    const durationOfsesion = document.getElementById("durationOfsesion").value;
    const place = document.getElementById("place").value;

    const data = {
        idLobbies: idLobbies,
        durationOfsesion: durationOfsesion,
        place: place
    };

    fetch("http://localhost:3000/lobbies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Registration failed.");
            }
        })
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering.");
        });
});

///////////////////////////////////////////
document.getElementById("submitReportes").addEventListener("click", async (event) => {
    alert("llame al boton")
    event.preventDefault();
    alert("Button clicked");

    const idReportes = document.getElementById("idReportes").value;
    const razonReporte = document.getElementById("razonReporte").value;

    const data = {
        idReportes: idReportes,
        razonReporte: razonReporte
    };

    fetch("http://localhost:3000/reportes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Registration failed.");
            }
        })
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering.");
        });
});