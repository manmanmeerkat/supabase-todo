import { supabase } from "../utils/supabase";

export const getAllTodos = async () => {
    const todos = await supabase.from("supabase-todo").select("*");
    return todos.data;
};

export const addTodo = async (title:string) => {
    await supabase.from("supabase-todo").insert({ title: title});
};

export const deleteTodo = async (id: number) => {
    await supabase.from("supabase-todo").delete().eq("id", id)
};