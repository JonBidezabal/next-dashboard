import {redirect}from 'next/navigation'
export default function Home() {
redirect('dasboard/counter')
  return (
    < >
    <h1>Hola Mundo</h1>   
    </>
  );
}
