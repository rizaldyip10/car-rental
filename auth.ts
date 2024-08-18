import axios from "axios";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { JWT } from "next-auth/jwt";

type DecodedJwtProps = {
    id: string;
    email: string;
    photo: string;
    name: string;
}
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: { label: "Email", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { data, status } = await axios.post(`/api/auth/sign-in`, 
                    {
                    email: credentials.username,
                    password: credentials.password
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })

                if (status !== 200) throw new Error("Login failed");

                // const useCookie = cookies();
                // useCookie.set("uid", data.token, {
                //     httpOnly: true,
                //     secure: false,
                //     maxAge: 21600,
                //     path: "/"
                // });

                const decodedJwt = jwtDecode<DecodedJwtProps>(data.token);

                const returnedValue = {
                    id: decodedJwt.id,
                    email: decodedJwt.email,
                    image: decodedJwt.photo,
                    name: decodedJwt.name
                }
                return returnedValue;
            }
        })
    ],
    pages: {
        signIn: "/sign-in"
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT, user: User & { token?: string } }) {
            if (user) {
                token.email = user.email,
                token.id = user.id,
                token.name = user.name,
                token.picture = user.image
                token.token = user.token
            }

            return token;
        },
        async session({ session, token }: { session: any, token: JWT }) {
            session.user = {
                id: token.id,
                email: token.email,
                token: token.token,
                name: token.name,
                picture: token.picture
            };

            return session;
        }
    }
})