const { ethers } = window;


export const getProvider = () => {
    if (!window.ethereum) throw new Error("Installera MetaMask!");
    return new ethers.BrowserProvider(window.ethereum);
};


export const connectWallet = async () => {
    if (!window.ethereum) throw new Error("Installera MetaMask!");
    await window.ethereum.request({ method: "eth_requestAccounts" });
};


export const getBlockNumber = async () => {
    const provider = getProvider();
    return await provider.getBlockNumber();
};


export const getBalance = async (address) => {
    const provider = getProvider();
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
};

export const sendTransaction = async (to, amount) => {
    const provider = getProvider();
    const signer = await provider.getSigner();

    const tx = await signer.sendTransaction({
        to: to,
        value: ethers.parseEther(amount)
    });

    const receipt = await tx.wait();
    return receipt;
};