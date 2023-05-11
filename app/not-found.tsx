import Link from "next/link";

export default function Home() {
  return (
    <main className='h-screen flex justify-center items-center bg-port-blueground-300 text-white'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4 p-2'>¿Estás un poco curioso, no?</h1>
        <Link href="/" className="underline text-lg italic font-bold text-port-font">Perdon, quiero volver a la pagina principal</Link>
      </div>
    </main>
  )
}
