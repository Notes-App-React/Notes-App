// components/Note.jsx
import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import { Card, Button, Modal, Input } from 'antd';

export function Note() {
  const { notes, removeNote, editNote } = useContext(NoteContext);
  const [visible, setVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const showModal = (note) => {
    setSelectedNote(note);
    setEditedTitle(note.title);
    setEditedContent(note.content);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleEdit = () => {
    const updatedNote = {
      ...selectedNote,
      title: editedTitle,
      content: editedContent,
    };
    editNote(updatedNote);
    setVisible(false);
  };

  return (
    <div>
      {notes.map((note) => (
        <Card
          key={note.id}
          className="mb-4"
          title={note.title}
          extra={
            <Button danger onClick={() => removeNote(note.id)}>
              Delete
            </Button>
          }
        >
          <p>{note.content}</p>
          <p>Created at: {note.createdAt}</p>
          <Button onClick={() => showModal(note)}>Details</Button>
        </Card>
      ))}
      <Modal
       title={<div style={{ textAlign: 'center' }}>Detail Note</div>}
        centered 
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="edit" type="primary" onClick={handleEdit}>
            Edit
          </Button>,
        ]}
      >
        <Input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder="Title"
          className="mb-2"
        />
        <Input.TextArea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          placeholder="Content"
          rows={4}
          className="mb-2"
        />
        <p>Created at: {selectedNote.createdAt}</p>
      </Modal>
    </div>
  );
}
