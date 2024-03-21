async function loadWalletContents() {
  const wallet = await getWallet();
  if (!wallet) {
    return;
  }
  const balances = await wallet.listBalances();
  const balancesList = document.getElementById('balances-list');
  balancesList.innerHTML = '';
  for (const balance of balances) {
    const balanceElement = document.createElement('li');
    balanceElement.innerText = `${balance.currency}: ${balance.amount}`;
    balancesList.appendChild(balanceElement);
  }
}
  
