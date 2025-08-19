"use client";

import { Checkbox, IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";

export default function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setIsCompleted] = useState(false);
  const [title, setTitle] = useState("");
  return (
    <div className="flex items-center justify-between w-full border-b border-gray-200 pb-2 pt-2 hover:bg-gray-100 gap-2">
      <Checkbox
        checked={completed}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />

      <div className="flex-1">
        {isEditing ? (
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="내용을 입력해주세요"
          />
        ) : (
          <p className={`${completed ? "line-through" : ""}`}>{title}</p>
        )}
      </div>

      <div className="flex gap-2 ml-auto mr-4 text-gray-500 hover:text-gray-700">
        {isEditing ? (
          <IconButton onClick={() => setIsEditing(false)}>
            <i className="fa-solid fa-save" />
          </IconButton>
        ) : (
          <IconButton onClick={() => setIsEditing(true)}>
            <i className="fa-solid fa-pencil" />
          </IconButton>
        )}
        <IconButton>
          <i className="fa-solid fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
