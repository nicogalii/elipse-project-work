import useWebHookUrl from "../../hooks/useWebHookUrl";

const WebHookUrl = () => {

    const {handleUrlChange, handleConfirm, handleNotifySim, confirm, url} = useWebHookUrl();

  return (
    <>
      <h3>Inserisci l'url dove ricevere notifiche webhook</h3>
      <input onChange={handleUrlChange} type="text" />
      <button onClick={handleConfirm}>Conferma</button>
      {confirm && (
        <>
          <p>L'url dove riceverai le notifiche è: {url}</p>
          <button onClick={handleNotifySim}>Simula notifica</button>
        </>
      )}
    </>
  );
};

export default WebHookUrl;
