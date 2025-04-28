import { useSyncModalState } from "../lib/hooks/SyncModalState";
import "./App.css";

function App() {
  const modalState = useSyncModalState();
  return (
    <>
      <div>
        <button
          onClick={async () => {
            const data = await modalState.openModal();
            console.log("Open Modal invoked", data);
          }}
        >
          Open Modal
        </button>

        {modalState.value && (
          <div>
            modal opened{" "}
            <button
              onClick={async () => {
                modalState.closeModal({ test: "123" });
                console.log("Close modal invoked");
              }}
            >
              close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
