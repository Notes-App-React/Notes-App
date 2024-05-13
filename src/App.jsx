import React from "react";
import { Card } from "antd";
import { Note } from "./components/Note";
import { Form } from "./components/Form";
import { NoteProvider } from "./context/NoteContext";

function App() {
  return (
    <NoteProvider>
      <Card className="w-full">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Notes App</h1>
        </div>
        <Form />
        <Note />
      </Card>
    </NoteProvider>
  );
}

export default App;
