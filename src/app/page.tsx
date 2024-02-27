'use client'

import { useGetAllTodoQuery } from "@/redux/features/todoApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function Home() {

  const {data} = useGetAllTodoQuery();
  console.log("data = ", data)
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {data?.map(todo => {
          return <Card key={todo.id} className="flex flex-col justify-between">
          <CardHeader className="flex flex-col gap-4 item-center">
            <CardTitle> Team: {todo.userId}</CardTitle>
            {/* <CardDescription>{Date.now()}</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>{todo.todo}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <button>View Detail</button>
            {todo.completed && <Badge variant="completed">completed</Badge>}
          </CardFooter>
        </Card>
        })}
      </div>
    </main>
  );
}
