import { useEffect, useState } from 'react';

interface ToDo {
  id: number;
  title: string;
}

const useGetAllToDo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<ToDo>>([]);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  return { isLoading, data, setData };
};

export default useGetAllToDo;
