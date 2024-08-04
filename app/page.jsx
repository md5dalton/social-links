import UList from "@/components/UList"
import Image from "next/image"
import Link from "next/link"

const links = [
    {name: "GitHub", link: "https://github.com/md5dalton"},
    {name: "Frontend Mentor", link: "https://www.frontendmentor.io/profile/md5dalton"},
    {name: "Twitter", link: "https://twitter.com/md5dalton"},
    {name: "LinkedIn", link: "#"},
    {name: "Instagram", link: "#"},
]

export default () => (
    <section
        className="
            bg-dark-grey grid gap-6 justify-items-center
            text-center rounded-lg p-8
            shadow-md
            w-10/12
            md:w-auto
        ">
        <Image
            alt="profile picture"
            src="/profile.jpg"
            height={120}
            width={120}
            className="rounded-full"
        />
        <div>
            <h1 className="text-3xl font-bold">Mjr Mpiti</h1>
            <h2 className="text-lg text-green font-semibold">Maseru, Lesotho</h2>
        </div>
        <p>"Building the web, one line at a time."</p>
        <UList
            className="grid gap-4 w-full"
            items={links}
            itemHandler={({ name, link }) => (
                <Link
                    target="_blank"
                    href={link}
                    className="
                        block bg-grey w-full
                        py-2 font-semibold rounded-lg
                        hover:bg-green hover:text-off-black
                        transition-colors
                    "
                >
                    {name}
                </Link>
            )}
        />
    </section>
)