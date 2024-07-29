import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import {useGetUser} from "./useGetUser.ts";

interface Task {
    id: number;
    title: string;
    description: string;
    created_at: string;
    user_id: number;
}

export const useGetTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const user = useGetUser();

    const fetchTasks = async () => {
        if (!user) {
            setLoading(false);
            setError('utilisateur non connecté');
            return;
        }

        try {
            const { data, error } = await supabase
                .from('tasks')
                .select('*')
                .eq('user_id', user.id);

            if (error) {
                throw error;
            }

            setTasks(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [user]);

    return { tasks, loading, error, fetchTasks };
};
