# ReactModalState

Synchronous Modal state for react

## Usage

```bash
npm install react-modal-state
```

### Example

```javascript
/*
  function useSyncModalState<T = any>(): {
    value: boolean;
    openModal: () => Promise<T | null>;
    closeModal: (returnValue: T) => void;
  }
*/
import { useSyncModalState } from "react-modal-state";

const App = () => {
  const modalState = useSyncModalState();

  return (
    <>
      <div>
        <button
          onClick={async () => {
            const data = await modalState.openModal();
            console.log("This was called after modal was closed", { returnData: data });
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
                console.log("Modal Closed");
              }}
            >
              close
            </button>
          </div>
        )}
      </div>
    </>
  );
};
```

## Resource:

- Project Setup: https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma
