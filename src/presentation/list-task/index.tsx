import React from 'react';
import {Form} from "../../core/presentation/components/form/Form.tsx";
import {TaskInput} from "./taskInput.ts";
import {useAddTask} from "../../core/application/hooks/useAddTask.ts";
import {useGetUser} from "../../core/application/hooks/useGetUser.ts";
import {useGetTasks} from "../../core/application/hooks/useGetTasks.ts";

export const ListTask = () => {
    const {addTask, error} = useAddTask();
    const user = useGetUser();
    const { tasks, loading, error: taskError, fetchTasks } = useGetTasks();

    const add = async (values) => {
        console.log({...values, user_id: user?.id});
        await addTask({...values, user_id: user?.id});
        await fetchTasks();
    }
    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error}</p>;
    console.log(tasks)
    return (
        <>
            <div className='flex justify-between items-center px-10'>
                <div className='flex flex-wrap'>
                    {tasks.length > 0 ? (
                        <div className='flex flex-wrap'>
                            { tasks.map((task) => (
                                <a
                                   className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {task.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <p>Pas de tache à affiché</p>
                    )}
                </div>
                <div className="flex h-screen justify-center items-center">
                    <Form
                        formClass="p-2 border-gray-400 rounded-xl m-5"
                        title={{
                            text: 'Ajouter une tache',
                            class: 'text-center text-2xl'
                        }}
                        description={{
                            text: "Ajouter une tache à votre liste",
                            class: 'text-center mb-3'
                        }}
                        properties={TaskInput}
                        submitAction={add}
                        actionClass="flex justify-center items-center"
                        submitButton={{
                            text: "Enregistrer",
                            class: "px-5 py-2 bg-green-500 my-5 rounded-xl"
                        }}
                    />
                </div>
            </div>


        </>
    );
};