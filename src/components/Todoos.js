import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./Style.css";

const Todoos = () => {
  const [todos, setTodos] = useState([]); // لیست تودوها
  const [inputValue, setInputValue] = useState(""); // ورودی کار جدید
  const [isEditing, setIsEditing] = useState(null); // وضعیت برای مشخص کردن اینکه کدام تودو در حال ویرایش است
  const [editValue, setEditValue] = useState(""); // ورودی برای ویرایش

  // تابع برای اضافه کردن تودو
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]); // اضافه کردن تودو به لیست
      setInputValue(""); // خالی کردن ورودی
    }
  };

  // تابع برای حذف تودو
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // حذف تودو با ایندکس
    setTodos(newTodos);
  };

  // تابع برای ذخیره ویرایش تودو
  const saveEdit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editValue : todo
    ); // بروزرسانی تودوی ویرایش شده
    setTodos(updatedTodos);
    setIsEditing(null); // خروج از حالت ویرایش
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        textAlign: "center",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <h1 style={{ color: "#1976d2" }}>Todo List</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <TextField
          variant="outlined"
          label="New Todo"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // به‌روزرسانی ورودی
          sx={{ flexGrow: 1, marginRight: 2 }}
        />
        <Button
          onClick={addTodo}
          variant="contained"
          color="primary"
          size="large"
        >
          Add
        </Button>
      </Box>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ marginBottom: 10, display: "flex", alignItems: "center" }}
          >
            {isEditing === index ? (
              // حالت ویرایش
              <Box sx={{ flexGrow: 1, marginRight: 2 }}>
                <TextField
                  variant="outlined"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)} // به‌روزرسانی ورودی ویرایش
                  fullWidth
                />
              </Box>
            ) : (
              // حالت نمایش معمولی
              <Box
                sx={{
                  flexGrow: 1,
                  padding: "8px 16px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: 2,
                }}
              >
                {todo}
              </Box>
            )}
            {isEditing === index ? (
              <Button
                onClick={() => saveEdit(index)}
                variant="contained"
                color="success"
                size="small"
                sx={{ marginLeft: 2 }}
              >
                Save
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setIsEditing(index);
                    setEditValue(todo);
                  }}
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ marginLeft: 2 }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => deleteTodo(index)}
                  variant="outlined"
                  color="error"
                  size="small"
                  sx={{ marginLeft: 2 }}
                >
                  Delete
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Todoos;
