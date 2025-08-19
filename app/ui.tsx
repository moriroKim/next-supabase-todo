"use client";

import { Button, Input } from "@material-tailwind/react";
import Todo from "./components/todo";

const todos = [
  {
    id: 1,
    title: "New Todo",
  },
  {
    id: 2,
    title: "New Todo 2",
  },
  {
    id: 3,
    title: "New Todo 3",
  },
];
export default function UI() {
  return (
    <div className="w-2/3 mx-auto py-10 flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">TODO LIST</h1>

      <Input
        label="Search TODO"
        placeholder="Search TODO"
        icon={<i className="fa-solid fa-search" />}
      />

      {todos.map((todo) => (
        <Todo key={todo.id} />
      ))}

      <Button>
        <i className="fas fa-plus mr-2"></i>
        ADD TODO
      </Button>
    </div>
  );
}
