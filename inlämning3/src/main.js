import { 
    getBlockNumber, 
    getBalance, 
    sendTransaction, 
    connectWallet 
} from './blockchain.js';


async function init() {
    try {
        await connectWallet();
        const count = await getBlockNumber();
        document.getElementById('blockCount').innerText = count;
    } catch (err) {
        console.error("Fel:", err);
    }
}


document.getElementById('checkBalanceBtn').addEventListener('click', async () => {
    const addr = document.getElementById('addressInput').value;
    const display = document.getElementById('balanceDisplay');

    try {
        display.innerText = "Hämtar...";
        const eth = await getBalance(addr);
        display.innerText = `Balans: ${eth} ETH`;
    } catch {
        display.innerText = "Fel adress";
    }
});


document.getElementById('sendBtn').addEventListener('click', async () => {
    const to = document.getElementById('toAddress').value;
    const amount = document.getElementById('amount').value;
    const status = document.getElementById('statusMsg');

    try {
        status.innerText = "Signera i MetaMask...";
        const receipt = await sendTransaction(to, amount);
        status.innerHTML = `Klar! <a href="https://sepolia.etherscan.io/tx/${receipt.hash}" target="_blank">Visa kvitto</a>`;
    } catch (err) {
        status.innerText = "Fel: " + err.message;
    }
});

init();