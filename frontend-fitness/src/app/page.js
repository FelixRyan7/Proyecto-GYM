export default function Home() {
  return (
    
      <>
      <div className="container mx-auto z-20 min-h-[calc(100vh-100px)] mt-20 md:mt-0 md:grid grid-cols-2 items-center">
         <div className="text-background flex justify-center p-10">
         <h1 className="text-5xl text-primary-light text-center">Transforma tu cuerpo, <span className="typing-effect">transforma tu vida.</span></h1>
         <p className="text-center"></p>
         </div>
         <div className="flex flex-col gap-6 mx-10">
          <h1 className="text-2xl text-background outline outline-background p-2 rounded-xl cursor-pointer text-center uppercase hover:bg-primary-light hover:outline-primary-light hover:text-dark hover:rounded-none transform transition-all duration-300 ease-in-out">
            Hazte Socio
          </h1>
          <h1 className="text-2xl text-background outline outline-background p-2 rounded-xl cursor-pointer text-center uppercase hover:bg-primary-light hover:outline-primary-light hover:text-dark hover:rounded-none transform transition-all duration-300 ease-in-out">
            Nuestras instalaciones
          </h1>
         </div>
        
      </div>
      
      </>
  )
  };