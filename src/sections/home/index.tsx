import Image from 'next/image'
import Link from 'next/link'

const HomeSection = () => {
    return (
        <div className="flex m-auto text-center border-2 h-screen sm:flex sm:text-left">
            {/* <div className="m-auto">
                <Image
                    src="/me.jpg"
                    alt="Norbert Cseh in sleep"
                    className="rounded-full"
                    width={250}
                    height={250}
                />
            </div> */}
            <div className="m-auto">
                <h1 className="font-mono text-5xl pb-5 font-bold">Hi, I&apos;m Norbert Istvan Cseh.</h1>
                <h3 className="font-mono text-2xl pb-3">
                    Software developer engineer in Test at{" "}
                    <a className="text-emerald-500"
                        href="https://www.logmein.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LogMeIn
                    </a>
                </h3>
                <p className="font-mono text-xl italic">Slowly figuring out web development.</p>
                <p className="font-mono text-xl italic">
                    You can find my personal GitHub profile{" "}
                    <a
                        className="text-emerald-500"
                        href="https://github.com/NorbertCseh"
                        target="_blank"
                        rel="noreferrer"
                    >
                        here.
                    </a>
                </p>
            </div>
        </div>
    )
}

export default HomeSection;