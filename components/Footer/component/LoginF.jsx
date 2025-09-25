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
                <div className={styles.After_login}>
                    <Image className={styles.github} src={session.user.image} width={25} height={25} alt="description"></Image>
                    <button className={styles.github_signout} onClick={() => signOut()}>Sign out</button>
                </div>
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
            <div className={styles.ID_PW}>
                <h6 className={styles.Acc_heading}>Create an Account</h6>
                <div className={styles.div_U}>
                    <p className={styles.U_heading}>Username:</p>
                    <input placeholder="i.e. Jason@olx.com" className={styles.ID}></input>
                </div>
                <div className={styles.div_P}>
                    <p className={styles.P_heading}>Password:</p>
                    <input placeholder="Should be Strong" type="password" className={styles.PW}></input>
                </div>
            </div>
        </>
    )
}