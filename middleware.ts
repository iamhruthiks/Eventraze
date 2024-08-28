import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        'api/webhook/clerk',
        'api/webhook/stripe',
        '/api/uploadting'
    ],
    ignoredRoutes: [
        'api/webhook/clerk',
        'api/webhook/stripe',
        '/api/uploadting'
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};