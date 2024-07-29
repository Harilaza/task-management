import { useState } from 'react';
import { supabase } from '../supabase';
import {useGetUser} from "./useGetUser.ts";

export const useAddTask = () => {
    const [error, setError] = useState(null);

    const addTask = async (task) => {
        setError(null);
        try {

            const { data, error } = await supabase
                .from('tasks')
                .insert([task]);

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            setError(error.message);
        }
    };

    return {
        addTask,
        error
    };
};