// components/Form.jsx
import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import { nanoid } from 'nanoid';
import { Input, Button } from 'antd';

export function Form() {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addNote({
      id: nanoid(),
      title: title,
      content: content,
      createdAt: new Date().toLocaleString(),
    });
    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="mb-2"
      />
      <Input.TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows={4}
        className="mb-2"
      />
      <Button type="primary" htmlType="submit" className='mb-4'>
        Add Note
      </Button>
    </form>
  );
}
