/* eslint-disable @typescript-eslint/ban-ts-comment */
import NextAuth, {AuthOptions} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: AuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24, // 1 day
	},
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
			authorization: {
				params: { scope: "identify" }
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, profile }) {
			// Persist the OAuth access_token and or the user id to the token right after signin
			if (account) {
				// @ts-ignore
				token.id = profile.sub;
			}
			return token;
		},

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token and user id from a provider.
			// @ts-ignore
			session.user.id = token.sub;

			return session;
		},
	}
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };