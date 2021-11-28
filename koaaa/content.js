const ctx1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FInd your nearest airport!</title>
</head>
<body>
    <form method="POST" action="">
        <h1>Enter your latitude and longitude, or allow your browser to check.</h1>
        <input type="text" name="location" /> <br>
        <input type="submit" value="check" >
    </form>
    <script type="text/javascript">
        navigator.geolocation.getCurrentPosition(function (pos) {
            var latIng = pos.coords.latitude + ',' + pos.coords.longitude;
            document.querySelector('[name="location"]').value = latIng;
        })
    </script>
</body>
</html>`;

const ctx2 = (airport) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your nearest airport is : ${airport.name}</title>
</head>
<body style="text-align: center">
    <h1>
        The airport closest to your location is: ${airport.name}
    </h1>
    <table style="margin: 0 auto"> 
        <tr>
            ${Object.keys(airport).map(v => `<th>${v}</th>`)}
        </tr>
        <tr>
            ${Object.keys(airport).map(v => `<td>${airport[v]}</td>`)}
        </tr>
    </table>
</body>
</html>`;

const ctx3 = (airport) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your nearest airport is : ${airport.name}</title>
</head>
<body style="text-align: center">
    <h1>
        The airport closest to your location is: ${airport.name}
    </h1>
    <canvas id="my_dataviz" width="440" height="320" style="margin: 0 auto"></canvas>
    <table style="margin: 0 auto"> 
        <tr>
            ${Object.keys(airport).map(v => `<th>${v}</th>`)}
        </tr>
        <tr>
            ${Object.keys(airport).map(v => `<td>${airport[v]}</td>`)}
        </tr>
    </table>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script>
        // select the canvas element created in the html.
        const canvas = document.getElementById('my_dataviz');

        const width = canvas.offsetWidth
        const height = canvas.offsetHeight


        const projection = d3.geoNaturalEarth1()
            .scale(width / 1.3 / Math.PI)
            .translate([width / 2, height / 2])

        const ctx = canvas.getContext('2d');


        const pathGenerator = d3.geoPath(projection, ctx);


        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data){

            // initialize the path
            ctx.beginPath();

            // Got the positions of the path
            pathGenerator(data);

            // Fill the paths
            ctx.fillStyle = "#999";
            ctx.fill();

            // Add stroke
            ctx.strokeStyle = "#69b3a2";
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(100, 75, 5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.closePath();

        })
        ctx.fillStyle = 'red';
        ctx.arc(100, 75, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        
    </script>
</body>
</html>`;

const listCtx = {ctx1: ctx1, ctx2: ctx2, ctx3: ctx3};
module.exports = listCtx;