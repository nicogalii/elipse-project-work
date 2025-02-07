import { useState } from 'react'

const Dashboard = () => {
  const [url, setUrl] = useState('');
  const [confirm, setConfirm] = useState<boolean>(false);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
    setConfirm(false);
  }

  const handleConfirm = () => {
    setConfirm(true);
  }

  const handleNotifySim = () => {
    fetch(url, {
      method: 'POST',
      body: 'NOTIFICA!'
    })
  }

  return (
    <>
    <p>Inserisci l'url dove ricevere notifiche webhook</p>
    <input onChange={handleUrlChange} type="text" />
    <button onClick={handleConfirm}>Conferma</button>
    {confirm && (
      <>
      <p>L'url dove riceverai le notifiche è: {url}</p>
    <button onClick={handleNotifySim}>Simula notifica</button>
    </>
    )}

    </>
  )
}

export default Dashboard;
