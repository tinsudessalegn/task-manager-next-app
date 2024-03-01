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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Loading } from "./sections/loading";
import { ErrorPage } from "./sections/error";


export default function Home() {

  const {data, error, isLoading} = useGetAllTodoQuery();
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {error? (
          <ErrorPage/>
        ): isLoading ? (
          <Loading/>
        ): data ? (
          <>
          {data?.map(todo => {
            return <Card key={todo.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 item-center">
              <Avatar>
                <AvatarImage src="./image/ava_img.jpg"></AvatarImage>
                <AvatarFallback>{todo.userId}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle> Team: {todo.userId}</CardTitle>
                <CardDescription>Due: Tuesday Feb 27</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{todo.todo}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary" size="sm">View Detail</Button>
              {todo.completed && <Badge variant="completed">completed</Badge>}
            </CardFooter>
          </Card>
          })}
          </>
        ): null}
      </div>
    </main>
  );
}
