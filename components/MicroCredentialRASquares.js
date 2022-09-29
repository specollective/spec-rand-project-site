import Image from "next/future/image";
import Link from 'next/link'


function MicroCredentialRASquares({ MicroCredentialRASquareContent }) {
  return (
    <div className="bg-spec-black-600 p-10">
      <div className="align-content-center justify-center">
        <div className="grid grid-cols-2 align-content-center gap-2 p-2 md:mx-4 justify-items-center lg:grid-cols-4">
          {MicroCredentialRASquareContent.map((user, id) => {
            return (
              <section key={`${user.name}-${id}`} className="relative">
                <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                  <h3 className="tracking-wider font-bold text-white text-xl">
                    {user.name}
                  </h3>
                  <p className="mx-auto">{user.hover_title}</p>
                  <br></br>
                  <div className="xs:hidden md:inline-block">
                    <Link href="/research-assistants">
                      <a className="mx-auto text-sm hover:underline">
                        Learn More {">>"}
                      </a>
                    </Link>
                  </div>
                </div>
                <Image alt={user.name} src={user.pic} />
                <p className="md:hidden text-black text-base font-bold text-center">
                  {user.name}
                </p>
                <div className="md:hidden text-black text-xs text-center">
                  {user.title}
                </div>
                <div className="flex justify-center p-1 md:hidden">
                  <Link href="/research-assistants">
                    <a className="text-center text-sm">Learn More {">>"}</a>
                  </Link>
                </div>
              </section>
            );
            // eslint-disable-next-line
          })}
        </div>
      </div>
    </div>
  );
}

export default MicroCredentialRASquares