const url=`https://newsdata.io/api/1/news?apikey=pub_16281c7a7f01b99b009cbdbfa8c260982b03&country=in&category=sports&page=4`;
    
fetch('https://newsdata.io/api/1/news?apikey=pub_16281c7a7f01b99b009cbdbfa8c260982b03&country=in&category=sports&page=4')
.then(response => response.json())
.then(data => console.log(data));

