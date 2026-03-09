Introduction
A blog platform designed for users who want to share their travel experiences with a like-minded community. Users can create posts about their trips, view others posts, and interact through comments.

Reflection
I quite enjoyed working with Next.js on this project, as I found the framework relatively straightforward to use once I understood its structure. At one point, I encountered some challenges when working with the client and server components, when I unintentionally attempted to pass data across the client-server barrier after incorrectly applying ‘use server’. I had to spend some time restructuring the code to debug.
To avoid repeatedly writing the database connection string throughout the project, I moved the connection logic into a utility file. This helped reduce duplication and made the codebase cleaner and easier to manage. Implementing the delete functionality was one of the more challenging aspects of the project because of the separation between server and client components in Next.js. I needed to adjust how the delete action was handled so that it worked correctly within these constraints.
For future improvements, I would enhance the visual design of the blog by adding images to posts and improving the overall styling to make the platform more engaging for users.
