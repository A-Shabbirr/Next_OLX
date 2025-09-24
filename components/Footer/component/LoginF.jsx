'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import styles from "@/components/Footer/Footer.module.css";

export default function Component() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                {session.user.name} <br />
                <Image className={styles.github} src={session.user.image} width={25} height={25} alt="description"></Image>
                <button className={styles.github_signout} onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <br />
            <button className={styles.github_signin} onClick={() => signIn('github')}>Sign in with Github</button>
            <button className={styles.github_signin} onClick={() => signIn('google')}>Sign in with Google</button>
            <br />
            <h6>Or</h6>
            <div>
                <h6>Create an Account</h6>
                <input></input>
                <input></input>
            </div>
        </>
    )
}