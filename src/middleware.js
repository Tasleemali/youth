import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/service/login",
    // if user try to go account page if not logged they will redirct login page
  },
});

export const config = { matcher: ["/checkout"] };
