import Image from "next/image"

const AboutSection = () => {
    return (<div className="w-full h-screen flex m-auto" id="about">
        <div className="flex h-auto m-auto">
            <div className="text-center h-auto m-auto ml-16">
                <Image
                    src="/me.jpg"
                    alt="Norbert Cseh in sleep"
                    className="rounded-full"
                    width={400}
                    height={400}
                />
                <section className="text-center m-auto">
                    <h2 className="text-5xl mb-7">About me</h2> <br />
                    <span className="text-lg"> Hi! I&apos;m Norbert and I love crafting things for the web.<br />I discovered my passion for Web Development during highscool. </span> <br />
                    <span className="text-lg"> If I&apos;m not doing anything coding-related, I enjoy doing custom keyboards, cycling or spending time with my family. </span> <br />
                </section>
            </div>
            <div className="text-center">
                <p className="text-2xl mb-10"> Some tools, technologies or concepts I&apos;m familiar or have worked with:</p>
                <div className="text-xl">
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>Vue</li>
                        <li>GraphQL (URQL)</li>
                        <li>MongoDB</li>
                        <li>TypeScript</li>
                        <li>NextJS</li>
                        <li>Exoress</li>
                        <li>Nodejs</li>
                        <li>Tailwind</li>
                        <li>Bulma</li>
                        <li>Puppeteer</li>
                        <li>Selenuim</li>
                    </ul>
                </div>
            </div>
        </div>

    </div >)
}

export default AboutSection;