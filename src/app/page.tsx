import Compt from "react";

export default function Home() {
  return (
    <div>
      {/* <div className="bg-pink-200 p-5 grid sm:grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-4 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4 2xl:gap-4">
        <div className="bg-blue-300 p-4 my-4">1</div>
        <div className="bg-lime-100 p-4 my-4">2</div>
        <div className="bg-purple-300 p-4 my-4">3</div>
        <div className="bg-green-200 p-4 my-4">4</div>
      </div>
      <div className="bg-red-300  p-5 sm:bg-green-300 sm:h-screen md:bg-yellow-200 md:h-screen lg:bg-blue-400 lg:h-screen xl:bg-blue-400 xl:h-screen">
        <h1 className="font-extrabold text-red-900 font-serif py-4 text-lg text-center">
          My First Heading
        </h1>
        <p className=" text-red-900 text-md font-mono">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eius
          pariatur numquam libero doloremque quisquam enim suscipit rerum modi
          iste mollitia sunt deserunt molestias amet quia voluptate, tempore,
          error obcaecati. Voluptatem neque tempore repellat architecto ad et
          reiciendis nobis,<span>{`The Queen =>`}</span>{" "}
          <span className="italic underline underline-offset-4 hover:decoration-red-600 hover:underline-offset-2">
            AMMARA GUL
          </span>{" "}
          quisquam a nemo quidem recusandae voluptas inventore consequatur enim
          vitae assumenda maiores molestias odit? Esse in obcaecati eos,
          accusamus sint fugit. Ab voluptates, repudiandae expedita officiis,
          accusantium laudantium saepe odit sunt animi cum dicta. Repellendus
          quo animi voluptatibus et, alias beatae possimus harum laborum porro
          sunt exercitationem perspiciatis illo quisquam expedita? Animi, ullam.
          Quas officia sed necessitatibus cumque est totam aliquid quisquam, nam
          praesentium provident quo, asperiores assumenda, illum nihil ipsam
          repellat modi nobis. Enim ipsum provident libero qui fugiat
          consequuntur? Odit repellat voluptatum veniam voluptate ex? Quo animi
          cupiditate ex libero cumque tempore facere nesciunt beatae possimus
          enim aliquam at, totam iusto ipsum eveniet consequatur atque corrupti
          ad deserunt aspernatur.
        </p>
      </div> */}
      <div className="h-80 flex flex-col items-start bg-gray-300 justify-between ">
        <div className="p-2 bg-yellow-200">This is Block 1 quite - bigger</div>
        <div className="p-2 bg-blue-200 text-5xl">Block 2 quite bigger</div>
        <div className="p-2 bg-red-300"> bigger Block 3</div>
        <div className="p- bg-green-200 self-center">Block 4 green in color</div>
      </div>
      <div className="flex md:flex-row items-baseline content-around flex-wrap mt-12 h-80 bg-green-100 justify-between ">
        <div className="p-2 bg-yellow-200">This is Block 1 quite - bigger</div>
        <div className="p-2 bg-blue-200 text-5xl">Block 2 quite bigger</div>
        <div className="p-2 bg-red-300 "> bigger Block 3 green in color green in color green in color</div>
        <div className="p-2 bg-green-200">Block 4 green in color</div>
      </div>
      
      <div>
        
      </div>
    </div>
    
  );
}
