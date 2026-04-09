# 🌐 Block Explorer
> **Viktigt:** För att använda appen behöver du ha **MetaMask** installerat och vara ansluten till **Sepolia Test Network**.

Det här är en enkel frontend-applikation för att interagera med Ethereum-blockkedjan. Jag har byggt den med JavaScript och biblioteket Ethers.js (v6). 

Appen körs mot **Sepolia Testnet** men fungerar med valfritt nätverk som är inställt i MetaMask.

## Funktioner
* **Blockräknare**: Visar hur många block som finns i kedjan just nu.
* **Kolla balans**: Skriv in en valfri adress för att se hur mycket SepoliaETH som finns på kontot.
* **Skicka transaktion**: Möjlighet att skicka ETH till en annan adress (signeras via MetaMask).

## Hur man kör projektet
1. Se till att du har **MetaMask** installerat i din webbläsare.
2. Byt nätverk till **Sepolia Test Network** i MetaMask.
3. Öppna `index.html` (jag har kört den via en lokal server/Vite på port 3000).
4. Godkänn kopplingen till MetaMask när sidan laddas.

## Tekniker
* **HTML5 / CSS3** (Dark mode design).
* **JavaScript (ES6)**: Uppdelat i moduler (`blockchain.js` för logik och `main.js` för UI) för att hålla koden ren (SOC).
* **Ethers.js v6**: För att kommunicera med blockkedjan.

## Utveckling
Jag har fokuserat på att hålla logiken separerad från designen. Allt som har med själva blockkedje-anropen att göra ligger i en egen fil för att göra koden lättläst och enkel att underhålla.
