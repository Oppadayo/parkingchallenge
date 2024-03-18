import { Entrance } from "../Entrance";
import { Exit } from "../Exit";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function Main() {
  return (
    <main className="flex flex-col p-4 mt-8 place-content-center">
      <Tabs defaultValue="entrance" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="entrance">Entrada</TabsTrigger>
          <TabsTrigger value="exit">Saída</TabsTrigger>
        </TabsList>
        <TabsContent value="entrance">
          <Entrance />
        </TabsContent>
        <TabsContent value="exit">
          <Exit />
        </TabsContent>
      </Tabs>
    </main>
  );
}
