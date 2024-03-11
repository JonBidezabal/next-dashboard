import { CartCounter } from "@/app/shopping-cart";


export const metadata = {
    tittle: 'lo que sea',
    description: 'es lo que sea será'
}
export default function CounterPage() {

    

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">

        <span>Euros para mi</span>
        <CartCounter />

    </div>
  );
}